import * as React from 'react';
import renderer from 'react-test-renderer';

import { LexendText } from '@/components/StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<LexendText>Snapshot test!</LexendText>).toJSON();

  expect(tree).toMatchSnapshot();
});
