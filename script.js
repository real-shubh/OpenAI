// It can also be a .ts file
import { RunGPTService } from 'src/app/services/runGPT.service';

export class HomePage implements OnInit, OnDestroy {
response: any = '';
loadInterval;
constructor (private runGPTService: RunGPTService) {}
  
loader() {
    this.loadInterval = setInterval(() => {
      this.response += '.';

      // If the loading indicator has reached three dots, reset it
      if (this.response === '....') {
        this.response = '';
      }
    }, 300);
  }

  typeText(text) {
    let index = 0;
    this.response = '';
    let interval = setInterval(() => {
      if (index < text.length) {
        this.response += text.charAt(index);
        index++;
        var dem = document.getElementById("gpt-container") as HTMLInputElement;
        dem.scrollTop = dem.scrollHeight;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  sendGPTPromt() {
    var inputElement = document.getElementById('chatBox') as HTMLInputElement;
    console.log('@@@', inputElement);

    var ques = inputElement.value;
    console.log(ques);
    this.response = '';
    this.loader();
    this.runGPTService
      .sendUserPrompt(ques)
      .then((res: any) => {
        console.log('res=> ', typeof res);
        clearInterval(this.loadInterval);
        var parsedData = res.trim();
        this.typeText(parsedData);
        // this.response = res.trim();
      })
      .catch((error) => {
        console.log(error);
        clearInterval(this.loadInterval);
        this.response = error;
      });
  }
}
}

//for ... loader
loader() {
    this.loadInterval = setInterval(() => {
      this.response += '.';

      // If the loading indicator has reached three dots, reset it
      if (this.response === '....') {
        this.response = '';
      }
    }, 300);
  }

// for giving testwise response
  typeText(text) {
    let index = 0;
    this.response = '';
    let interval = setInterval(() => {
      if (index < text.length) {
        this.response += text.charAt(index);
        index++;
        var dem = document.getElementById("gpt-container") as HTMLInputElement;
        dem.scrollTop = dem.scrollHeight;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  sendGPTPromt() {
    var inputElement = document.getElementById('chatBox') as HTMLInputElement;
    console.log('@@@', inputElement);

    var ques = inputElement.value;
    console.log(ques);
    this.response = '';
    this.loader();
    this.runGPTService
      .sendUserPrompt(ques)
      .then((res: any) => {
        console.log('res=> ', typeof res);
        clearInterval(this.loadInterval);
        var parsedData = res.trim();
        this.typeText(parsedData);
        // this.response = res.trim();
      })
      .catch((error) => {
        console.log(error);
        clearInterval(this.loadInterval);
        this.response = error;
      });
  }
}
