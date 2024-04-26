export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let message = 'But sometimes let';
    message += getLast();
  
    return message;
  }
