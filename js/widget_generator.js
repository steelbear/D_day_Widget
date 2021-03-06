// !!!TEMP JSON DATA
let data = JSON.parse(
  '{  "exam": [    {      "title": "국가직 9급 필기 시험",      "date": "2019-10-19"    },    {      "title": "토익",      "date": "2019-06-20"    },    {      "title": "수능",      "date": "2019-11-31"    }  ],  "format": {    "dday": "D-28 (D-%d)",    "date": "2019-02-19 (YYYY-MM-DD)"  },  "style": {    "title": {      "font-family": ["arial", "verdana", "georgia"],      "font-size": "5px",      "color": "black",      "background-color": "white"    },    "dday": {      "font-family": ["arial", "verdana", "georgia"],      "font-size": "5px",      "color": "black",      "background-color": "white"    },    "date": {      "font-family": ["arial", "verdana", "georgia"],      "font-size": "5px",      "color": "black",      "background-color": "white"    }  },  "animation": {    "type": "slide",    "speed": "0.1s",    "interval": "1s"  }}'
);

// Add "dday" key to each data["exam"][i]
for (i = 0; i < data["exam"].length; i++) {
  data["exam"][i]["dday"] = "";
}

divs = [];
for (i = 0; i < data["exam"].length; i++) {
  // Create div for each exam
  divs.push(document.createElement("div"));
  divs[i].id = "exam_" + i; // == divs[i].setAttribute("id", "exam_" + i);

  document.querySelector(".widget").appendChild(divs[i]);

  // Create title, date, dday for each div
  for (key in data["exam"][i]) {
    k = document.createElement("div");
    k.classList = key;

    k.innerHTML = data["exam"][i][key];

    document.querySelector("#" + divs[i].id).appendChild(k);
  }
}

// Create a timer function reloaded continuously
let x = setInterval(function() {
  const KOREAN_TIME = 1000 * 60 * 60 * 9;

  for (i = 0; i < data["exam"].length; i++) {
    let now = new Date().getTime() + KOREAN_TIME;

    let distance = new Date(data["exam"][i]["date"]) - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#exam_" + i + " > .dday").innerHTML =
      "D - " + d + "d " + h + "h " + m + "m " + s + "s ";
  }
}, 1000);
