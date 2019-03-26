import React from 'react';
import ReactDOM from 'react-dom';


function App() {
    return (
      <div>
        <p>
            Hello Webpack!
        </p>
        <pre>
          {
`
import React from 'react';
import ReactDOM from 'react-dom';


function App() {
    return (
      <div
        className={styles.main}
      >
        <p>
            Hello Webpack!
        </p>
        <code>
            {
}
        </code>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
`
}
        </pre>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
