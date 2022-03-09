let popup1 = document.querySelector(".blue-1");

let html = "";

if session["userName"] == NULL)
{
  let button = document.querySelector("login");
  button,style.visible = true;
}
else // this solved the issue
{
button.style.visible= false;
}

function popup(){
    let popupNode = document.createElement("div");
    popupNode.classList.add("popup");
    popupNode.innerHTML = `
        <span class="popup--button" onclick="this.parentNode.remove();">&times; </span>
        <div class ="centre_text">   
            <h3> Who we are? </h3>
            <p style="margin-top: 2em;"> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
        </div>
        `;
    document.body.appendChild(popupNode);    
}

function popup_why(){
    let popupNode = document.createElement("div");
    popupNode.classList.add("popup");
    popupNode.innerHTML = `
        <span class="popup--button" onclick="this.parentNode.remove();">&times; </span>
        <div class ="centre_text">   
            <h3> Who we are? </h3>
            <p style="margin-top: 2em;"> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
        </div>
        `;
    document.body.appendChild(popupNode);    
}

function popup_comp(){
    let popupNode = document.createElement("div");
    popupNode.classList.add("popup");
    popupNode.innerHTML = `
        <span class="popup--button" onclick="this.parentNode.remove();">&times; </span>
        <div class ="centre_text">   
            <h3> Who we are? </h3>
            <p style="margin-top: 2em;"> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
        </div>
        `;
    document.body.appendChild(popupNode);    
}

function popup_japan(){
    let popupNode = document.createElement("div");
    popupNode.classList.add("popup");
    popupNode.innerHTML = `
        <span class="popup--button" onclick="this.parentNode.remove();">&times; </span>
        <div class ="centre_text">   
            <h3> Who are we? </h3>
            <p style="margin-top: 2em;"> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
            <p> The aime of our comapny is to thrive and prosper just like the companies before us have done. </p>
        </div>
        `;
    document.body.appendChild(popupNode);    
}


function popup_tourism(){
    let popupNode = document.createElement("div");
    popupNode.classList.add("popup2");
    popupNode.innerHTML = `
        <span class="popup--button" onclick="this.parentNode.remove();">&times; </span>
        <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Tokyo / 東京
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Fuji-san / 富士山
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Himeji castle /　姫路城
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Kyoto /　京都
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Okinawa /　沖縄
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingSix">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Hokkaido / 北海道
              </button>
            </h5>
          </div>
          <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        `;
    document.body.appendChild(popupNode);    
}



