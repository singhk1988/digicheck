import questionsJson from './questions.json';

export default class QuestionsData {
  constructor() {
    this._questions = questionsJson.questions || [];
    this._answers = [];
  }

  getQuestion(qid) {
    return this._questions.find((q)=>(q.id === qid));
  }

  getFirstQuestion() {
    return this.getQuestion(1);
  }

  setAnswer(qid, answer) {
    this._answers.push({
      id: qid,
      value: answer,
    });
  }

  popAnswer() {
    return this._answers.pop();
  }
}