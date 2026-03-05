const { createApp } = Vue;

createApp({
  data() {
    return {
      newName: '',
      newComment: '',
      comments: [],

      plasticPerWeek: null,
      annualPlastic: null,
      plasticTip: ''
    };
  },

  methods: {

    addComment() {
      if (this.newName && this.newComment) {
        this.comments.push({
          id: Date.now(),
          name: this.newName,
          text: this.newComment
        });

        this.newName = '';
        this.newComment = '';
      }
    },

    estimatePollution() {
      if (this.plasticPerWeek !== null && this.plasticPerWeek >= 0) {

        this.annualPlastic = this.plasticPerWeek * 52;

        if (this.annualPlastic < 100) {
          this.plasticTip = "Great job! Keep reducing single-use plastics!";
        }
        else if (this.annualPlastic < 500) {
          this.plasticTip = "Consider reusable bottles or containers.";
        }
        else {
          this.plasticTip = "High impact! Try reducing and recycling more actively.";
        }

      }
    }

  }

}).mount('#app');