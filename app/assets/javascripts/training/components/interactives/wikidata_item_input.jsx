import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchWikidataItem } from '../../../actions/wikidata_item_interactive_actions';

const WikidataItemInput = (props) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchWikidataItem(input);
  };

  return (
    <form className="training__slide__content" onSubmit={onSubmit}>
      <input
        className="training-text-input"
        placeholder={I18n.t('wikidata.item_input')}
        value={input}
        onChange={e => setInput(e.target.value)}
        onSubmit={onSubmit}
      />
      <button className="btn btn-primary ghost-button capitalize btn-med" type="submit">Okay!</button>
    </form>
  );
};


const mapStateToProps = state => ({
  wikidataItem: state.wikidataItemInteractive
});

const mapDispatchToProps = {
  fetchWikidataItem
};

export default connect(mapStateToProps, mapDispatchToProps)(WikidataItemInput);
