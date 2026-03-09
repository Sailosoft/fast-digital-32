import React from 'react';

export default function MyMessage() {
  const cardStyle: React.CSSProperties = {
    padding: '30px',
    borderRadius: '20px',
    backgroundColor: '#fffafa',
    border: '1px solid #ffcad4',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    maxWidth: '600px',
    margin: '20px auto',
    lineHeight: '1.6',
    fontFamily: 'Georgia, serif',
    color: '#444'
  };

  const highlightStyle: React.CSSProperties = {
    color: '#d63384',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  return (
    <div style={cardStyle}>
      {/* <p style={highlightStyle}>To My Baby Juvy,</p> */}

      <p>
        I Love You And Thank You For Being With Me And To All Wonderful Memories We Make Together.
      </p>

      <div style={{ marginTop: '20px' }}>
        <p>Gusto ko sabihin na happy anniversary sa atin at naka one year na tayo baby.</p>

        <p>Thank You and Maraming Salamat sa lahat lahat ng ating memories.</p>

        <p>Sa ating mga gala, kain, kwentuhan, pakikinig at mga masayang moment natin.</p>

        <p>Kahit sa hug habang natutulog tayo at sa mga intimate moment natin.</p>

        <p>I am Happy being with you and I Love You.</p>

        <p>Sa mga napaggagalaan natin at sa mga bagay na pinupuntahan natin.</p>

        <p>Masaya ako baby na kasama ka at sa pagmamahal mo.</p>

        <p>
          Thank you sa mga efforts na nagluto ka, naglaundry, sa paggawa ng letter,
          sa massage at sa lahat ng bagay na ginawa mo baby.
        </p>

        <p style={{ marginTop: '25px', fontWeight: 'bold' }}>
          Thank You So Much,<br />
          More Monthsary sa atin baby,<br />
          <span style={highlightStyle}>I love youuu ❤️</span>
        </p>
      </div>
    </div>
  );
}