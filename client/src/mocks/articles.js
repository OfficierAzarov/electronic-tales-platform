export const articlesSource = [
  {
    id: '1',
    title: 'What is a port ?',
    slug: 'what-is-a-port',
    content: 'Lorem **ipsum** |richlink_1| <b>blabliblou</b>.         In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. Et puis encore |richlink_2|? Cependant, il se pourrait que |richlink_3|.<br>![](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)<br> In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. <h1 style="color: #5e9ca0;">You can edit <span style="color: #2b2301;">this demo</span> text!</h1><h2 style="color: #2e6c80;">How to use the editor:</h2><p>Paste your documents in the visual editor on the <strong>left</strong> or your HTML code in the source editor in the right. <br />Edit any of the two areas and see the other changing in real time.&nbsp;</p><p>Click the <span style="background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;">Clean</span> button to clean your source code.</p><h2 style="color: #2e6c80;">Some useful features:</h2><ol style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;"><li style="clear: both;"><img style="float: left;" src="https://html-online.com/img/01-interactive-connection.png" alt="interactive connection" width="45" /> Interactive source editor</li>',
    richLinks: [
      {
        reference: 'richlink_1',
        name: 'ce 1er article',
        content: 'Je suis *un soir*',
        needsASpaceAfter: true
      },
      {
        reference: 'richlink_2',
        name: 'ce 2e article',
        content: 'Le plat pays ![](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)',
      },
      {
        reference: 'richlink_3',
        name: 'ce 3e article',
        content: 'Akh troika! In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light.',
      }
    ],
    thumbnail: 'gameboy.png',
    category: 'Too late to ask',
  },
  {
    id: '2',
    title: 'But how does it know ?!',
    slug: 'but-how-does-it-know',
    content: 'In the **beginning God created** the <br>heaven</br> and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness. And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.Lorem ipsum [1] blabliblou et puis encore [2]? Cependant, il se pourrait que [3].',
    richLinks: [
      {
        reference: '1',
        content: 'Je suis un soir'
      },
      {
        reference: '2',
        content: 'Le plat pays'
      }
    ],
    thumbnail: 'learning.png',
    category: 'Buzzwords',
  },
  {
    id: '3',
    title: 'What is an IP address ?!',
    slug: 'what-is-an-ip-address',
    content:
      'An IP address is a way to show how smart you are by just running a command line.',
    richLinks: [
        {
          reference: '1',
          content: 'Je suis un soir'
        },
        {
          reference: '2',
          content: 'Le plat pays'
        }
    ],
    thumbnail: 'chatcolor.png',
    category: 'Too late to ask',
  },
];
