import React from 'react';

class SimpleProcess extends React.Component {
  state = { activeIndex: 0 };

  changeIndex = (newIndex) => {
    this.setState({ activeIndex: newIndex });
  }

  isActive = (index) => {
    return index === this.state.activeIndex;
  }

  render() {
    return (
      <div>
        <header className='nav nav-tabs'>
          {this.props.steps.map((step, index) => (
            <div className='nav-item'>
              <a
                className={`nav-link ${index === this.state.activeIndex ? 'active' : ''}`}
                onClick={() => this.changeIndex(index)}
                href='#'
              >
                {step.label}
              </a>
            </div>
          ))}
        </header>
        <div>
          {this.props.steps
            .filter((_, index) => this.isActive(index))
            .map(step => (
              <article className='content'>
                <step.component />
              </article>
            ))}
        </div>
      </div>
    );
  }
}

export default SimpleProcess;
