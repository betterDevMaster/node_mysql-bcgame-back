
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const jwt = require('jsonwebtoken');
const config = require('config.json');

module.exports = {
    create,
};

async function create(user) {
    // validate
    if (!await db.User.findOne({ where: { email: user.email } })) {
        const params = {}
        params.hash = await bcrypt.hash(config.defaultPassword, 10);
        params.firstName = user.firstName
        params.lastName = user.lastName
        params.name = user.name
        params.email = user.email
        params.profilePicURL = user.profilePicURL
        params.social = 1
        await db.User.create(params);
    }
    return authenticate(user.email, config.defaultPassword)
}

async function authenticate(email, password) {
    const user = await db.User.scope('withHash').findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.hash)))
        throw 'Email or Password is incorrect';

    // authentication successful
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    return { ...omitHash(user.get()), token };
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}