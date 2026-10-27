const { questions } = require('../../utils/questions');

Page({
  data: {
    questions,
    currentIndex: 0,
    selectedOption: -1,
    checked: false,
    isCorrect: false,
    score: 0,
    finished: false
  },

  onSelectOption(event) {
    if (this.data.checked || this.data.finished) {
      return;
    }

    const index = Number(event.currentTarget.dataset.index);
    this.setData({ selectedOption: index });
  },

  onCheckAnswer() {
    if (this.data.selectedOption < 0 || this.data.finished) {
      wx.showToast({
        title: '请先选择答案',
        icon: 'none'
      });
      return;
    }

    if (this.data.checked) {
      return;
    }

    const currentQuestion = this.data.questions[this.data.currentIndex];
    const isCorrect = this.data.selectedOption === currentQuestion.answer;

    this.setData({
      checked: true,
      isCorrect,
      score: isCorrect ? this.data.score + 1 : this.data.score
    });
  },

  onNextQuestion() {
    if (!this.data.checked) {
      wx.showToast({
        title: '请先判题',
        icon: 'none'
      });
      return;
    }

    const nextIndex = this.data.currentIndex + 1;
    if (nextIndex >= this.data.questions.length) {
      this.setData({ finished: true });
      return;
    }

    this.setData({
      currentIndex: nextIndex,
      selectedOption: -1,
      checked: false,
      isCorrect: false
    });
  },

  onRestart() {
    this.setData({
      currentIndex: 0,
      selectedOption: -1,
      checked: false,
      isCorrect: false,
      score: 0,
      finished: false
    });
  }
});
