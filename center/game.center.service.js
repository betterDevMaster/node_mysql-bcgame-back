const config = require("config.json");
const db = require("_helpers/db");
const fs = require("fs");

const BIGWIN_AMOUNT = 100;
const GAME_RULE = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [2, 1, 0, 1, 2],
  [0, 1, 2, 1, 0],
  [1, 2, 2, 2, 1],
  [1, 0, 0, 0, 1],
  [2, 2, 1, 0, 0],
  [0, 0, 1, 2, 2],
  [0, 1, 1, 1, 2]
];
const GAME_SCORE = {
  "0,0,0,": 100,
  "0,0,0,0,": 1000,
  "0,0,0,0,0,": 40000,

  "1,1,1,": 50,
  "1,1,1,1,": 200,
  "1,1,1,1,1,": 1000,
  "2,2,2,": 50,
  "2,2,2,2,": 200,
  "2,2,2,2,2,": 1000,

  "3,3,3,": 40,
  "3,3,3,3,": 150,
  "3,3,3,3,3,": 500,
  "4,4,4,": 40,
  "4,4,4,4,": 150,
  "4,4,4,4,4,": 500,

  "5,5,5,": 30,
  "5,5,5,5,": 100,
  "5,5,5,5,5,": 400,
  "6,6,6,": 30,
  "6,6,6,6,": 100,
  "6,6,6,6,6,": 400,

  "7,7,7,": 10,
  "7,7,7,7,": 50,
  "7,7,7,7,7,": 200,
  "8,8,8,": 10,
  "8,8,8,8,": 50,
  "8,8,8,8,8,": 200,
  "9,9,9,": 10,
  "9,9,9,9,": 50,
  "9,9,9,9,9,": 200,
  "A,A,A,": 10,
  "A,A,A,A,": 50,
  "A,A,A,A,A,": 200
}

module.exports = {
  getSlotBetCurrent,
  getSlotBetRequest,
  getSlotBetRequestSpecial,
};

async function getSlotBetCurrent(params) {
  return await db.GameCurrent.findOne({
    where: {
      gameType: params.gameType,
      gameId: params.gameId,
    },
  })
}

async function getSlotBetRequest(params) {
  params.current -= params.betAmount;
  params.current = Math.round(params.current * 1000) / 1000

  var data = {};
  data.error = 0;
  data.response = {};
  data.response.initCards = [
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11]
  ];
  //calculate for debug...
  data.response.winAmount = 0;
  data.response.arrRetVal = [];
  {
    //1 - init array
    for (let rule_index = 0; rule_index < GAME_RULE.length; rule_index++) {
      var currRule = GAME_RULE[rule_index];
      var cardIdString = "";
      var unWildCardId = -1;
      var matchLen = 0;
      for (; matchLen < currRule.length; cardIdString += cardId + ",", matchLen++) {
        var cardPos = currRule[matchLen];
        var cardId = data.response.initCards[matchLen][cardPos];
        if (cardId == 10)
          cardId = 'A';
        if (cardId == 0)
          continue;
        if (unWildCardId == -1) {
          unWildCardId = cardId;
          continue;
        }
        if (unWildCardId != cardId)
          break;
      }
      if (matchLen >= 3) {
        var win = 0;
        if (cardIdString == "0,0,0,0,0,")
          win += GAME_SCORE[cardIdString]
        else if (cardIdString.startsWith("0,0,0,0,"))
          win += GAME_SCORE["0,0,0,0,"]
        else if (cardIdString.startsWith("0,0,0,"))
          win += GAME_SCORE["0,0,0,"];
        //last all wild card are replaced by normal card... 
        if (unWildCardId != -1) {
          cardIdString = cardIdString.replace("0,", unWildCardId + ",");
          cardIdString = cardIdString.replace("0,", unWildCardId + ",");
          cardIdString = cardIdString.replace("0,", unWildCardId + ",");
          cardIdString = cardIdString.replace("0,", unWildCardId + ",");
          cardIdString = cardIdString.replace("0,", unWildCardId + ",");

          if (GAME_SCORE[cardIdString] !== undefined)
            win += GAME_SCORE[cardIdString];
        }
        data.response.arrRetVal.push(
          {
            retType: 0,
            win: win,
            linePosIdx: rule_index,
            cardCount: matchLen,
            audioIdx: ((unWildCardId == 'A' ? 10 : unWildCardId) + 1)
          }
        );
        data.response.winAmount += win;
      }
    }
    params.current += data.response.winAmount;
    params.current = Math.round(params.current * 1000) / 1000
    data.response.balance = params.current;
    data.response.betAmount = params.betAmount;
  }
  return data
}

async function getSlotBetRequestSpecial(params) {
  params.current -= params.betAmount;
  params.current = Math.round(params.current * 1000) / 1000
  var data = {};
  data.error = 0;
  data.response = {};
  data.response.initCards = [
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11],
    [parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11, parseInt(Math.random() * 100) % 11]
  ];
  data.response.arrRetVal = [{
    retType: 1,
    win: BIGWIN_AMOUNT,
    linePosIdx: null,
    cardCount: null,
    audioIdx: null
  }];
  params.current += BIGWIN_AMOUNT;
  params.current = Math.round(params.current * 1000) / 1000
  data.response.balance = params.current;
  data.response.betAmount = params.betAmount;
  data.response.winAmount = BIGWIN_AMOUNT;
  return data
}