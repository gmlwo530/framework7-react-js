import React from "react";

import {
  f7,
  Page,
  Navbar,
  Swiper,
  SwiperSlide,
  Block,
  Fab,
  Icon,
  FabButton,
  FabButtons,
} from "framework7-react";

const DetailPage = ({ f7router, id }) => {
  const _clickShareButton = () => {
    let toast = f7.toast.create({
      text: "Click Link Button!!!!",
      position: "top",
      closeTimeout: 2000,
    });
    toast.open();
  };

  const _clickWriteButton = () => {
    f7router.navigate("/new/");
  };

  return (
    <Page>
      <Navbar title={`Detail ${id}`} backLink={true} />
      <Swiper pagination>
        <SwiperSlide>
          <img
            src={`https://cdn.framework7.io/placeholder/nature-1000x600-${
              (id % 10) + 1
            }.jpg`}
            style={{
              width: "100vw",
            }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={`https://cdn.framework7.io/placeholder/nature-1000x600-${
              (id % 10) + 1 + 1
            }.jpg`}
            style={{
              width: "100vw",
            }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={`https://cdn.framework7.io/placeholder/nature-1000x600-${
              (id % 10) + 2 + 1
            }.jpg`}
            style={{
              width: "100vw",
            }}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Block>
        <p>
          Here comes paragraph within content block. Donec et nulla auctor massa
          Here comes paragraph within content block. Donec et nulla auctor massa
          pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae
          mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel,
          sagittis felis. Here comes paragraph within content block. Donec et
          nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse
          molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
          vulputate turpis vel, sagittis felis. Here comes paragraph within
          content block. Donec et nulla auctor massa pharetra adipiscing ut sit
          amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit
          amet quam mollis, vulputate turpis vel, sagittis felis. Here comes
          paragraph within content block. Donec et nulla auctor massa pharetra
          adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis
          tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis
          felis. Here comes paragraph within content block. Donec et nulla
          auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie
          velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate
          turpis vel, sagittis felis. pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis. Here comes paragraph
          within content block. Donec et nulla auctor massa pharetra adipiscing
          ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut
          sit amet quam mollis, vulputate turpis vel, sagittis felis. Here comes
          paragraph within content block. Donec et nulla auctor massa pharetra
          adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis
          tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis
          felis. Here comes paragraph within content block. Donec et nulla
          auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie
          velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate
          turpis vel, sagittis felis. Here comes paragraph within content block.
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <Fab position="right-bottom" slot="fixed" color="pink">
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
        <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
        <FabButtons position="left">
          <FabButton onClick={_clickWriteButton}>
            <Icon
              ios="f7:pencil"
              aurora="f7:pencil"
              md="material:pencil"
            ></Icon>
          </FabButton>
          <FabButton onClick={_clickShareButton}>
            <Icon ios="f7:link" aurora="f7:link" md="material:link"></Icon>
          </FabButton>
        </FabButtons>
      </Fab>
    </Page>
  );
};

export default DetailPage;
