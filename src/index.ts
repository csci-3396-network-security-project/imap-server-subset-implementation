interface Message {
  id: number;
  from: string;
  to: string;
  subject: string;
  body: {
    text: string;
  };
}

let messages: Message[];

export enum IMAPCommand {
  // Search for message with the string "1" in the subject
  SEARCH_1 = 'SEARCH HEADER SUBJECT "1"',
  // Fetch the body text of a message with an id of 1
  FETCH_1 = "FETCH 1 BODY[TEXT]",
}

export const imapCommand = (command: IMAPCommand) => {
  switch (command) {
    case IMAPCommand.SEARCH_1:
      // Search for the message with the subject "1"
      return `SEARCH ${messages.find((message) => message.id === 1)?.id}`;
    case IMAPCommand.FETCH_1:
      // Fetch the message with an id of 1
      return `FETCH 1 (BODY[TEXT] "${
        messages.find((message) => message.id === 1)?.body.text
      }")`;
  }
};

export enum ServerCommand {
  INIT = "INIT",
  RESET = "RESET",
}

export const serverCommand = (command: ServerCommand) => {
  switch (command) {
    case ServerCommand.INIT:
      // Initialize the server with two messages, one with a id of 1 and the other with an id of 2
      messages = [
        {
          id: 1,
          from: "person@email.com",
          to: "person2@email.com",
          subject: "Test Message 1",
          body: {
            text: "Test Message 1",
          },
        },
        {
          id: 2,
          from: "person2@email.com",
          to: "person@email.com",
          subject: "Test Message 2",
          body: {
            text: "Test Message 2",
          },
        },
      ];

      break;
    case ServerCommand.RESET:
      // Simulate a power cut to the server, which re-assigns the id of the messages to 2 and 1 respectively
      messages = messages.map((message) => {
        return {
          ...message,
          id: message.id === 1 ? 2 : 1,
        };
      });

      break;
  }
};
