import React, { Component } from 'react';
import styles from '../app.module.css';

export class Filter extends Component {
  searchItems = e => {
    e.preventDefault();
    this.props.onChange( e.target.value );
  };

  render() {
    return (
      <label className={styles.label}>
        Find contacts by name
        <input className={styles.input} type="text" name="filter" onChange={this.searchItems}></input>
      </label>
    );
  }
}
