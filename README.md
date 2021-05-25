# 20210520_Quiz_v01


    getQuestions = () => {
        fetch("https://opentdb.com/api.php?amount=10")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                questionBank: result.items
              });
            })
    }