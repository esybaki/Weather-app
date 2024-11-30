async function getData() {

    const api_token = "";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=619bfbff1362db2fcb97ff3e77c1526e";
    try
    {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }//light rain
        const result = await response.json();
        console.log(result["name"]);
        console.log(result["weather"][0]["description"]);
        console.log(result["main"]["temp"]);
        console.log(result["wind"]["speed"]);
        console.log(result["main"]["humidity"]);
        console.log(result);
        switch(result["weather"][0]["description"]) {
            case "light rain":
                var imgW = document.createElement("img");
                imgW.src="16_hail_color.png";
                imgW.setAttribute("id","imageW");
              break;
            case "broken clouds":
                var imgW = document.createElement("img");
                imgW.src="Image(3).png";
                imgW.setAttribute("id","imageW");
              break;
            case "clear sky":
                var imgW = document.createElement("img");
                imgW.src="01_sunny_color.png";
                imgW.setAttribute("id","imageW");
              break;
            default:

            var imgW = document.createElement("img");
            imgW.src="question-mark.jpg";
            imgW.setAttribute("id","imageW");
          } 
        
        const logoTemp = document.getElementById("logoTemp");
        logoTemp.append(imgW);
        var temp = document.createElement("h2");
        temp.setAttribute("id","temp");
        var tempC = Math.round(Number(result["main"]["temp"])-273);
        

        var location = document.createElement("p");
        location.setAttribute("id","logoLoc");
        location.innerText = result["name"];

        temp.innerText = tempC;
        logoTemp.append(temp);
        logoTemp.append(location);
        const div1 = document.getElementById("div1");
        var humid = document.createElement("div");
        
        var humidtext = document.createElement("div");
        humid.innerText = String(result["main"]["humidity"])+"%";
        humidtext.innerText = "رطوبت";
        div1.append(humid);
        div1.append(humidtext);

        const div2 = document.getElementById("div2");
        var wind = document.createElement("div");
        
        var windtext = document.createElement("div");
        wind.innerText = Math.round(result["wind"]["speed"]);
        windtext.innerText = "باد";
        div2.append(wind);
        div2.append(windtext);
        
    }catch(error){
        console.error(error.message);
    }

}
getData();