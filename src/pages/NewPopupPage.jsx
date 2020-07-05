import React from "react";

import {
  Page,
  Popup,
  BlockTitle,
  Block,
  List,
  ListInput,
  Button,
} from "framework7-react";

const NewPopupPage = ({ f7router }) => {
  const _submit = () => {
    f7router.navigate("/", {
      reloadAll: true,
    });
  };

  return (
    <Popup
      className="demo-popup-swipe-handler"
      swipeToClose
      swipeHandler=".swipe-handler"
    >
      <Page>
        <BlockTitle large>Form</BlockTitle>
        <Block strong>
          <p className="swipe-handler">
            <b>Try drag Here!</b>
          </p>
          <List noHairlinesMd>
            <ListInput type="text" placeholder="Test Text Input" clearButton />

            <ListInput
              type="password"
              placeholder="Test Password Input"
              clearButton
            />
          </List>
          <Button onClick={_submit} large fill>
            Submit
          </Button>
        </Block>
      </Page>
    </Popup>
  );
};

export default NewPopupPage;
