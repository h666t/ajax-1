btnHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.html");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const template = document.createElement("div");
      template.innerHTML = request.response;
      document.body.appendChild(template);
    }
  };
  request.send();
};

btnCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.css");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const style = document.createElement("style");
      style.innerHTML = request.response;
      document.head.append(style);
    }
  };
  request.send();
};

btnJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.js");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

btnXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.xml");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(request.responseXML);
    }
  };
  request.send();
};

btnJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.json");
  console.log("hi");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      let objJson;
      try {
        objJson = JSON.parse(request.response);
      } catch (error) {
        console.log("JSON.parse(request.response)转换错误");
        console.log(error);
      }
      console.log(objJson);
    }
  };
  request.send();
};

let n = 1;
btnNext.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}.json`);

  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      let array = JSON.parse(request.response);
      array.forEach((element) => {
        const li = document.createElement("li");
        li.innerHTML = element.id;
        list.appendChild(li);
      });
    }
  };
  n += 1;
  request.send();
};
