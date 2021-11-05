document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data1 = response.data;
          alert(data1);
        });
        
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
    };
    document.getElementById("j.coleButton").onclick = function () {
        axios.get("http://localhost:4000/api/j.cole/")
            .then(function (response) {
              const data = response.data;
              alert(data);
            });
        };
        document.getElementById("drakeButton").onclick = function () {
            axios.get("http://localhost:4000/api/drake/")
                .then(function (response) {
                  const data = response.data;
                  alert(data);
                });
            };
            document.getElementById("futureButton").onclick = function () {
                axios.get("http://localhost:4000/api/future/")
                    .then(function (response) {
                      const data = response.data;
                      alert(data);
                    });
                };

