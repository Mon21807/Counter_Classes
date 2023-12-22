class Counter {
    constructor() {
      this.count = 0;
      this.intervalId = null;
      this.isAutoIncrementing = false;
  
      this.display = document.getElementById('counterDisplay');
      this.toggleButton = document.getElementById('toggleButton');
      this.incrementButton = document.getElementById('incrementButton');
      this.decrementButton = document.getElementById('decrementButton');
  
      this.toggleButton.addEventListener('click', this.toggle.bind(this));
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
  
    toggle() {
      if (this.isAutoIncrementing) {
        this.stopAutoIncrement();
      } else {
        this.startAutoIncrement();
      }
    }
  
    startAutoIncrement() {
      this.isAutoIncrementing = true;
      this.toggleButton.textContent = 'Stop';
      this.intervalId = setInterval(() => {
        this.count++;
        this.updateDisplay();
      }, 1000);
    }
  
    stopAutoIncrement() {
      this.isAutoIncrementing = false;
      this.toggleButton.textContent = 'Start';
      clearInterval(this.intervalId);
    }
  
    increment() {
      this.stopAutoIncrement();
      this.count++;
      this.updateDisplay();
    }
  
    decrement() {
      this.stopAutoIncrement();
      this.count--;
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.display.textContent = this.count;
    }
  }
  
  const counter = new Counter();