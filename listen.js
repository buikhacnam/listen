/*
Select Voice: <select id='voiceList'></select> <br>
 <input id='txtInput' />
 <button id='btnSpeak'>Speak!</button>
*/
var default1 = document.getElementById('default');
var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

if(speechSynthesis !== undefined){
            speechSynthesis.onvoiceschanged = PopulateVoices;
}

function PopulateVoices(){
            voices = synth.getVoices();
          //  var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
            //voiceList.innerHTML = '';
            
            voices.forEach((voice)=>{
                var listItem = document.createElement('option');
                listItem.textContent = voice.name;
               
               // listItem.setAttribute('data-lang', voice.lang);
               listItem.setAttribute('data-name', voice.name);
                voiceList.appendChild(listItem);
                
            });

        //    voiceList.selectedIndex = selectedIndex;
}

PopulateVoices();


btnSpeak.addEventListener('click', ()=> {
            var toSpeak = new SpeechSynthesisUtterance(default1.innerText);
            var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
            console.log(selectedVoiceName);
            voices.forEach((voice)=>{
                if(voice.name === selectedVoiceName){
                    toSpeak.voice = voice;
                }
            });
            synth.speak(toSpeak);
});
