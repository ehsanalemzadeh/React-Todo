var React = require('react');

var Main = (props)=> (
      <div>
          <div>
              <p>Main.jsx</p>
              {props.children}
          </div>
      </div>
    );

module.exports = Main;
