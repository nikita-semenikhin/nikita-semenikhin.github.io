var Behaviour={GetCode:function(n,...t){return"new "+n+"(parent,"+t.map(function(n){return JSON.stringify(n)})+");"},Initialize:function(n,...t){let r=Behaviour.GetCode(n,...t),i=document.currentScript.parentElement;i.removeChild(document.currentScript);Behaviour.InitializeInternal(n,i,...t)},InitializeInternal:function(n,t,...i){let r=new window[n](t,...i);r.hasOwnProperty("OnWindowResize")&&window.addEventListener("resize",function(){r.OnWindowResize()});r.hasOwnProperty("OnDOMContentLoaded")&&document.addEventListener("DOMContentLoaded",function(){r.OnDOMContentLoaded()});r.hasOwnProperty("OnResourcesLoaded")&&document.addEventListener("readystatechange",function(){document.readyState=="complete"&&r.OnResourcesLoaded()})},Print:function(n,...t){t.map(function(n){console.log(n)})},PrintParent:function(n){console.log(n)}}
function Downloadable(n,t,i){n.className="Downloadable";var r=[],u=function(t,i){if(typeof t=="object"){var e=n.appendChild(document.createElement("select"));e.className="Select";e.onchange=function(){r[i]=e.value;f()};options=Object.keys(t);for(let n=0;n<options.length;n++)e.appendChild(new Option(options[n],options[n],!1,r[i]==options[n]));return r[i]=e.value,u(t[e.value],i+1)}return t},f=function(){var f;n.textContent="";f=n.appendChild(document.createElement("div"));f.innerText=t;f.className="Title";var s=u(i,0),e=s.split("|"),o=e[0],h=e[1],c=o.split("/").pop(),r=n.appendChild(document.createElement("a"));r.className="Button";r.innerText="Download";r.href=o;r.title=c+" "+h;r.download=""};f()}
function FontContextFitter(n){let t=window.getComputedStyle(n,null),i=parseInt(t.fontSize,10);this.OnWindowResize=function(){this.mobileCheck()||this.ChangeTitleFontSize()};this.OnResourcesLoaded=function(){this.ChangeTitleFontSize()};this.mobileCheck=function(){let n=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(n=!0)}(navigator.userAgent||navigator.vendor||window.opera),n};this.ChangeTitleFontSize=function(){for(var t=i;t>=8;t--){n.style.fontSize=t+"px";var r=n.offsetHeight,u=n.offsetWidth,f=n.scrollWidth,e=n.scrollHeight;if(e==r&&f==u)break}};this.BinarySearch=(n,t)=>{let r=0,u=n.length-1,i=Math.floor((r+u)/2);while(n[i]!==t&&r<=u)t<n[i]?u=i-1:r=i+1,i=Math.floor((r+u)/2);return n[i]===t?i:-1};this.binarySearch=function(n,t){for(var r=0,u=n.length-1,i,f;r<=u;)if(i=u+r>>1,f=t-n[i],f>0)r=i+1;else if(f<0)u=i-1;else return i;return-r-1}}
function Grid(n,t,i){this.element=n;this.elementWidthPx=t;this.numColumnsVariants=i;this.numColumnsVariants.sort(function(n,t){return n-t});this.previousContainerWidth=-1;this.previousClass="";this.previousNumColumns=0;this.OnWindowResize=function(){var n=this.element.offsetWidth,r,u,f,t;if(this.previousContainerWidth!=n){this.previousContainerWidth=n;r=0;u=Math.abs(n/i[0]-this.elementWidthPx);for(let t=1;t<i.length;t++)f=Math.abs(n/i[t]-this.elementWidthPx),f<u&&(u=f,r=t);t=i[r];this.previousNumColumns!=t&&(this.element.classList.remove("columns"+this.previousNumColumns),this.element.classList.add("columns"+t),this.previousNumColumns=t)}};this.OnDOMContentLoaded=function(){this.OnWindowResize()}}
function RoiImage(n,t,i){this.element=n;this.aspect=t;this.roi=i;this.previousContainerWidth=-1;this.previousContainerHeight=-1;this.image=this.element.getElementsByTagName("img")[0];const r=this.element.parentElement;this.OnWindowResize=function(){var e,o;let s=this.element.offsetWidth,n=this.element.offsetHeight;this.previousContainerWidth=s;this.previousContainerHeight=n;let l=i[0]/100,p=i[1]/100,a=i[2]/100,w=i[3]/100,h=p-l,c=w-a,v=s*t,u=v*c,f=v/h;const y=r.offsetHeight;u=Math.min(u,y);f=Math.min(f,y);n=Math.max(n,u);n=Math.min(n,f);e=n/s;e<t?(this.image.style.width="100%",this.image.style.height="auto",o=(1-(e/t-c)/(1-c))*a*100,this.image.style.transform="translate(0, -"+o+"%)"):(this.image.style.width="auto",this.image.style.height="100%",o=(1-(t/e-h)/(1-h))*l*100,this.image.style.transform="translate(-"+o+"%, 0)");this.element.style.minHeight=u+"px";this.element.style.maxHeight=f+"px"};this.OnResourcesLoaded=function(){this.OnWindowResize()};this.OnDOMContentLoaded=function(){this.OnWindowResize()}}
function LanguageMenu(n){this.mobileCheck=function(){let n=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(n=!0)}(navigator.userAgent||navigator.vendor||window.opera),n};let i=n.querySelectorAll(".Text"),t=!1;this.OnResourcesLoaded=function(){if(this.SetCurrentLanguage(),close=()=>n.classList.remove("MouseOver"),open=()=>n.classList.add("MouseOver"),this.mobileCheck()){let r=()=>{open(),t=!0},i=()=>{close(),t=!1};n.addEventListener("mouseout",i);n.addEventListener("click",n=>{t?i():r(),(!t||this.isSelected(n.target))&&n.preventDefault()})}else i.forEach(n=>n.addEventListener("mouseover",()=>n.classList.add("MouseOver"))),i.forEach(n=>n.addEventListener("mouseout",()=>n.classList.remove("MouseOver"))),n.addEventListener("mouseover",open),n.addEventListener("mouseout",close),n.addEventListener("click",n=>{this.isSelected(n.target)&&n.preventDefault()});n.style.visibility="visible"};this.SetCurrentLanguage=function(){let t=this.getTrimmedPath();i.forEach(i=>{i.innerHTML==t&&(i.classList.add("Selected"),n.removeChild(i),n.appendChild(i))})};this.getTrimmedPath=()=>{let n=window.location.pathname,t=n.split("_").reverse()[0].split(".")[0].toUpperCase();return n=="/"&&(t="EN"),t};this.isSelected=n=>n.classList.contains("Selected");this.setElementSize=t=>()=>n.style.height=t+"px";n.onclick=()=>n.href+=window.location.hash}
function LanguageSideMenu(n){function o(){window.addEventListener("sideStateChange",()=>{f=!r.isHidden&&r.isMinimalizeState,n.classList.toggle("Unpinned",f)});i.addEventListener("click",()=>u.close())}function s(){let n=t.querySelectorAll(".Text"),i=getLangCode();n.forEach(n=>{n.innerHTML==i&&n.classList.add("Selected")})}let t=n.querySelector(".LanguageSideMenu"),e=n.querySelector(".Tongue"),i=document.createElement("div");i.classList.add("Before");t.appendChild(i);let u=new SideComponent(n,t,e),r=window.TemplateState,f=!0;s();bindToTemplateState(r,u);o()}function getLangCode(){let n=window.location.pathname,t=n.split("_").reverse()[0].split(".")[0].toUpperCase();return n=="/"&&(t="EN"),t}
function MaterialCard(n){let t=n.querySelector(".MaterialCardSlider"),r=t.querySelector(".Title"),i=t.querySelector(".Text"),u=n.querySelector(".Image>img");this.OnResourcesLoaded=function(){this.mobileCheck()&&n.classList.add("Mobile")};window.addEventListener("load",()=>this.truncateSlider());this.mobileCheck=function(){let n=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(n=!0)}(navigator.userAgent||navigator.vendor||window.opera),n};this.mobileCheck()||(n.addEventListener("mouseover",()=>n.classList.add("MouseOver")),n.addEventListener("mouseleave",()=>n.classList.remove("MouseOver")));this.truncateSlider=()=>{let u=n.offsetHeight-r.clientHeight;t.offsetHeight<=u||(this.truncateToHeight(t,i,u),t.style.height=u+"px")};this.truncateToHeight=(n,t,r)=>{let f=i.innerHTML.split(" "),u=f[0],e=u;t.innerText=u+"…";for(let i=1;n.offsetHeight<r&&i<f.length;i++)e=u,u+=" "+f[i],t.innerHTML=u+"…";t.innerHTML=this.clearEnd(e)+"…"};n.style.visibility="visible";this.clearEnd=n=>n.replace(/[.,:"'&^\(\)\/\\]$/g,"")}
class SideComponent {

    position = 0;
    touchStart = {};
    isPinned = false;
    _isActive = false;
    isAlone = false;
    isClosing = false;
    isMobile = true;
    isBlocked = false;

    constructor(element, content, tongue) {
        this.element = element;
        this.content = content;
        this.tongue = tongue;
        this.element.parentNode.style.visibility = "hidden";

        this.width = content.offsetWidth;
        this.isLeft = element.parentNode.classList.contains('LeftSideContainer');
        this.sideMult = this.isLeft ? 1 : -1;

        this.openBound = this.width * .5;

        this.element.classList.add('SideComponent');
        this.content.classList.add('SideContent');
        this.tongue.classList.add('Tongue');
        this.glass = document.createElement('div');

        this.glass.classList.add('Glass');
        this.element.insertBefore(this.glass, this.element.firstChild);

        this.bind();
    }

    get isActive() { return this._isActive; }
    set isActive(isActive) {
        if (isActive == this._isActive)
            return;
        this._isActive = isActive;
        this.element.classList.toggle('Active', isActive);
        this.forvard(isActive);
    }

    bind() {
        window.addEventListener('resize', e => {
            this.close();
        });
        window.addEventListener('load', e => {
            this.isAlone = this.element.parentNode.children.length == 1;
            this.element.parentNode.style.visibility = "visible";
        });


        window.addEventListener('touchstart', e => {
            let touch = this.getTouch(e);
            if (touch == null || this.isBlocked)
                return;
            this.touchStart = {
                x: touch.clientX,
                y: touch.clientY,
            };
        });

        window.addEventListener('touchend', e => {
            if (this.isBlocked)
                return;
            if (this.position > this.openBound)
                this.open();
            else
                this.close();
        });

        window.addEventListener('touchmove', e => {
            if (this.isActive)
                e.preventDefault();
            let curr = this.getTouch(e);
            if (curr == null || this.isBlocked)
                return;

            let shiftX = curr.clientX - this.touchStart.x;
            let shiftY = curr.clientY - this.touchStart.y;
            let isVertical = Math.abs(shiftX) < Math.abs(shiftY);
            let targetIsHScrollable = canScrollTo(e.target, shiftX);

            if (!this.isActive && (isVertical || targetIsHScrollable)) {
                this.touchStart.x = curr.clientX;
                return;
            }

            if (!this.isDirectionCorrect(shiftX) || !this.isInTongueArea(this.touchStart.y))
                return;


            shiftX = Math.abs(shiftX);

            if (this.isClosing)
                shiftX = this.width - shiftX;

            this.moveTo(shiftX);
        }, { passive: false });


        this.tongue.addEventListener('click', e => this.isBlocked ? null : this.isClosing ? this.close() : this.open());

        window.addEventListener('click', e => {
            if (this.isBlocked || this.content.contains(e.target) || this.tongue.contains(e.target))
                return;
            this.close();
        });

        this.addEventListener('move', e => {
            this.element.classList.toggle('Modal', this.isActive);

            let opacity = this.position / this.width;
            this.glass.style.opacity = opacity;
            if (!this.isPinned)
                this.tongue.style.opacity = 1 - opacity;
        });
    }

    block(isBlocked) {
        this.isBlocked = isBlocked;
    }

    pin(isPinned) {
        if (this.isPinned == isPinned)
            return;
        this.isPinned = isPinned;
        this.element.classList.toggle('Pinned', isPinned);
        this.tongue.classList.toggle('Pinned', isPinned);

        pinTop(this.glass, isPinned);
    }

    open() { this.moveTo(this.width); }

    close() { this.moveTo(0); }


    addEventListener(...rest) { this.element.addEventListener.apply(this.element, rest); }
    removeEventListener(...rest) { this.element.removeEventListener.apply(this.element, rest); }
    dispatchEvent(...rest) { this.element.dispatchEvent.apply(this.element, rest); }

    onMove() {
        this.dispatchEvent(new CustomEvent('move', {
            bubbles: true,
            cancelable: true
        }));
    }

    moveTo(shiftX) {
        this.position = shiftX;
        this.isActive = true;
        if (this.position <= 0) {
            this.position = 0;
            this.isActive = false;
            this.isClosing = false;
        }
        if (this.position >= this.width) {
            this.position = this.width;
            this.isClosing = true;
        }

        this.element.style.transform = 'translateX(' + (this.position * this.sideMult) + 'px)';
        this.glass.style.transform = 'translateX(' + (-this.position * this.sideMult) + 'px)';
        this.onMove();
    }

    getTouch(e) {
        if (e.touches.length > 1 || !this.isPinned && !this.isAlone)
            return null;
        return e.touches[0];
    }

    isDirectionCorrect(shift) {
        let isLeft = XOR(this.isLeft, this.isClosing);
        return isLeft ? shift > 0 : shift < 0;
    }

    isInTongueArea(y) {
        let bounds = this.tongue.getBoundingClientRect();
        return this.isAlone || y > bounds.top && y < bounds.top + this.tongue.offsetHeight;
    }

    changeMobile(isMobile) {
        this.isMobile = isMobile;
        this.tongue.style.visibility = isMobile ? 'visible' : 'hidden';
    }

    forvard() {
        this.element.classList.toggle("Forward", this.isActive);
    }
}

function isHScrollable(element) {
    return element.scrollWidth > element.clientWidth && element.style.overflow != 'hidden' && element.style.overflowX != 'hidden';
}

function scrollRight(element) {
    return element.scrollWidth - element.scrollLeft - element.clientWidth;
}

function canScrollTo(element, shiftX) {
    while (element != document.body) {
        if (isHScrollable(element))
            return shiftX > 0 ? element.scrollLeft > 0 : scrollRight(element) > 0;
        element = element.parentNode;
    }
    return false;
}

function pinTop($elem, isPinned) {
    $elem.style.top = "0";
    let offset = -$elem.getBoundingClientRect().top;
    $elem.style.top = !isPinned ? "" : offset + "px";
}

function XOR(b1, b2) { return b1 ? !b2 : b2; }

function bindToTemplateState(state, component) {
    component.addEventListener('move', e => {
        state.isBlockedBy = component.isActive ? component : null;
        if (component.isActive)
            state.forwardSide(component.isLeft);
    });
    window.addEventListener('sideStateChange', e => {
        //component.close();
        component.pin(state.isHidden);
        component.changeMobile(state.isMobileState || state.isMinimalizeState);
        component.block(state.isBlockedBy != null && state.isBlockedBy != component);
    });

}
function SideMenu(n){let t=n.querySelector(".SideMenu"),i=n.querySelector(".TongueMenu"),r=new MenuSideComponent(n,t,i),u=window.TemplateState;bindToTemplateState(u,r)}class MenuSideComponent extends SideComponent{pin(n){this.isPinned!=n&&(super.pin(n),pinTop(this.content,n))}}
function ToggleButton(n){this.element=n;this.button=document.createElement("div");this.button.className="button toggle";this.Toggle=function(){this.button.classList.contains("checked")?(this.element.classList.remove("checked"),this.button.classList.remove("checked")):(this.element.classList.add("checked"),this.button.classList.add("checked"))};this.button.onclick=this.Toggle;this.element.appendChild(this.button)}
function getUniqueYouTubeIFrameID(){return youTubeIFrameID++,"youTubeIFrameID"+youTubeIFrameID}function callWhenYouTubeIFrameApiReady(n){youTubeIFrameApiIsReady?n():youTubeIFrameApiWaitList.push(n)}function onYouTubeIframeAPIReady(){youTubeIFrameApiWaitList.forEach(n=>n())}function VideoPlayer(n,t,i,r,u,f,e,o,s){this.element=n;this.code=t;this.aspect=i;this.showControls=r;this.autoPlay=u;this.loop=f;this.sound=e;this.mips=o;this.previousContainerWidth=-1;this.poster=s;var h=function(){n.style.height=n.offsetWidth/i+"px"};window.addEventListener("resize",h);this.onYoutubePlayerReady=function(){};this.onYoutubePlayerStateChange=function(n){if(n.data==YT.PlayerState.ENDED){this.loop&&(this.player.seekTo(0),this.player.playVideo());return}};this.CreateYoutubeIFrame=function(){var n=this;callWhenYouTubeIFrameApiReady(function(){var t=document.createElement("div"),i;t.className="VideoPlayerInner";n.showControls||(t.style.top="-100%",t.style.height="300%",t.style.pointerEvents="none");t.id=getUniqueYouTubeIFrameID();n.element.appendChild(t);i=n.showControls?1:0;n.player=new YT.Player(t.id,{height:"100%",width:"100%",videoId:n.code,host:"http://www.youtube-nocookie.com",playerVars:{rel:0,autoplay:n.autoPlay?1:0,controls:n.showControls?1:0,mute:n.autoPlay?1:n.sound?0:1},events:{onReady:function(t){n.onYoutubePlayerReady(t)},onStateChange:function(t){n.onYoutubePlayerStateChange(t)}}})})};this.CreateVideoTag=function(){var t=document.createElement("video"),u,f,e;t.className="VideoPlayerInner";t.poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";t.controls=this.showControls;t.autoplay=this.autoPlay;t.muted=this.autoPlay||!this.sound;t.loop=this.loop;this.element.appendChild(t);u=n.offsetWidth*window.devicePixelRatio;f=function(n){for(var r,t=0;t<o.length;t++)if(r=o[t].Key*i,r>.95*n)return o[t];return o[o.length-1]};let r=f(n.offsetWidth*window.devicePixelRatio);t.src=r.Value;e=function(){var i=n.offsetWidth*window.devicePixelRatio,e,o;u!=i&&(u=i,e=f(i),e.Key!=r.Key&&(r=e,o=t.currentTime,t.src=r.Value,t.currentTime=o))};window.addEventListener("resize",e)};this.CreateYouTubeIFrameApiScript=function(){var n,f,t,i,r;const u="YouTubeIFrameApiScript";if(n=document.getElementById(u),n===null&&(n=document.createElement("script"),n.id=u,n.src="https://www.youtube.com/iframe_api",window.YouTubeIFrameApiStatus="loading",window.YouTubeIFrameApiStatusTimeout=setTimeout(()=>{n.onerror&&n.onerror()},1e3),f=document.getElementsByTagName("head")[0],f.appendChild(n)),t=this,s){t.CreateVideoTag(s);return}window.YouTubeIFrameApiStatus==="loading"?(i=n.onload,n.onload=function(){n.onload=null;n.onerror=null;window.YouTubeIFrameApiStatus==="loading"&&(window.YouTubeIFrameApiStatus="ready");n.onerror!==null&&(n.onerror=null);i&&i();t.CreateYoutubeIFrame()},r=n.onerror,n.onerror=function(){n.onload=null;n.onerror=null;window.YouTubeIFrameApiStatus==="loading"&&(window.YouTubeIFrameApiStatus="failed");r&&r();t.CreateVideoTag()}):(window.YouTubeIFrameApiStatus==="ready"&&t.CreateYoutubeIFrame(),window.YouTubeIFrameApiStatus==="failed"&&t.CreateVideoTag())};this.OnDOMContentLoaded=function(){h();!r||u?this.CreateVideoTag():this.CreateYouTubeIFrameApiScript()}}var youTubeIFrameApiIsReady=!1,youTubeIFrameApiWaitList=[],youTubeIFrameID=0
class TemplateState {

    blockedBy = null;


    constructor(element, lWidth, rWidth, contentWidth, anchorWidth) {
        this.element = element;
        this.lWidth = lWidth;
        this.rWidth = rWidth;
        this.lastScroll = null;
        this.contentWidth = contentWidth;
        this.anchorWidth = anchorWidth;
        this.minimalizeMaxW = this.lWidth + 10 + this.rWidth + 10 + this.contentWidth + this.anchorWidth;
        this.mobileMaxW = this.contentWidt + this.anchorWidth + 10 + 10;

        this.element.style.paddingRight = this.rWidth + "px";
        this.element.style.paddingLeft = this.lWidth + "px";

        this.isMobileState = this.mobileCheck();
        this.isHidden = this.checkHide();
        this.isMinimalizeState = this.needToMinimize();
        this.bind();

    }

    bind() {

        window.addEventListener('resize', e => {
            this.isMobileState = this.mobileCheck();
            this.isMinimalizeState = this.isMobileState || this.needToMinimize();
        });


        window.addEventListener('scroll', e => {
            if (this.isBlockedBy != null) {
                window.scrollTo(this.lastScroll.x, this.lastScroll.y);
            }
            this.isHidden = this.checkHide();
        });
    }

    get isBlockedBy() { return this.blockedBy; }
    set isBlockedBy(blockedBy) {
        if (this.blockedBy == blockedBy)
            return;

        this.blockedBy = blockedBy;

        this.lastScroll = { x: window.scrollX, y: window.scrollY };

        this.onStateChange();
    }

    get isHidden() { return this.sideHidden }
    set isHidden(hidden) {
        if (this.sideHidden == hidden)
            return;
        this.sideHidden = hidden;
        this.onStateChange();
    }

    get isMinimalizeState() { return this.isMinimalize; }
    set isMinimalizeState(isMinimalize) {
        if (isMinimalize == this.isMinimalize)
            return;

        this.isMinimalize = isMinimalize;
        this.align();
        this.onStateChange();
    }

    get isMobileState() { return this.isMobile; }
    set isMobileState(isMobile) {
        if (this.isMobile == isMobile)
            return;

        this.isMobile = isMobile;
        if (isMobile)
            this.isMinimalize = true;

        this.align();

        this.onStateChange();
    }

    align() {
        this.element.classList.toggle('Mobile', this.isMobile);
        if (this.lContainer != null)
            this.alignL();
        if (this.rContainer != null)
            this.alignR();
    }

    alignR() {
        this.element.style.paddingRight = this.isMinimalize ? 0 : this.rWidth + "px";
        this.rContainer.style.width = this.isMinimalize ? 0 : this.rWidth + "px";
        this.rContainer.classList.toggle('Minimal', this.isMinimalize);
    }

    alignL() {
        this.element.style.paddingLeft = this.isMinimalize ? 0 : this.lWidth + "px";
        this.lContainer.style.width = this.isMinimalize ? 0 : this.lWidth + "px";
        this.lContainer.classList.toggle('Minimal', this.isMinimalize);
    }

    get isModalBlocked() { return this.modalBlocked; }
    set isModalBlocked(blocked) {
        this.modalBlocked = blocked;
    }


    onStateChange() {
        window.dispatchEvent(new CustomEvent('sideStateChange', {
            bubbles: true,
            detail: { state: this },
            cancelable: true
        }));
    }

    needToMinimize() {

        return document.documentElement.offsetWidth < this.minimalizeMaxW;
    }

    mobileCheck() {
        return mobileCheck(); // || document.documentElement.offsetWidth < this.mobileMaxW;
    }

    checkHide() {
        return this.isMobile && checkHide();
    }

    forwardSide(isLeft) {
        if (this.lContainer == null || this.rContainer == null)
            return;
        this.lContainer.classList.toggle('Forward', isLeft);
        this.rContainer.classList.toggle('Forward', !isLeft);
    }

    get leftContainer() { return this.leftContainer; }
    set leftContainer(lContainer) {
        this.lContainer = lContainer;
        if (lContainer == null)
            this.lWidth = 0;
    }

    get rightContainer() { return this.rContainer; }
    set rightContainer(rContainer) {
        this.rContainer = rContainer;
        if (rContainer == null)
            this.rWidth = 0;
    }

    get basicContent() { return this.content; }
    set basicContent(content) {
        this.content = content;
        this.content.style.maxWidth = this.contentWidth + "px";
    }
}

function TemplateLeftSideMenuInit(element, lWidth, rWidth, contentWidth, anchorLineWidth = 48) {
    window.TemplateState = new TemplateState(element, lWidth, rWidth, contentWidth, anchorLineWidth);
}

function TemplateLeftSideMenuAlign(element) {
    let state = window.TemplateState;
    state.leftContainer = element.querySelector('.LeftSideContainer');
    state.rightContainer = element.querySelector('.RightSideContainer');
    state.basicContent = element.querySelector('.Content');
    state.align();
    state.onStateChange();
}

function checkHide() {
    return window.scrollY > 10;
}

function mobileCheck() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

