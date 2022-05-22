import React from "react";

export default function Typography() {
  return (
    <div className="span-12x1">
      <h2 class="spacing-sm mt-1 font-48 opacity-50">Typography</h2>
      <div className="span-12x1">
        <h2 className="mb-2 mt-2 font-title">Font Sizes</h2>
        <div className="grid-2">
          <div className="grid-padding grid-border display-f content-sb font-8">
            CAPTION<span className="align-r font-8">8px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-12">
            Small text <span className="align-r font-8">12px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-14">
            Body 2 <span className="align-r font-8">14px</span>
          </div>
          <div className="span-1x2 grid-padding grid-border display-f content-sb font-16">
            Body <span className="align-r font-8">16px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-body font-16">
            button <span className="align-r font-8">16px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-body font-18">
            budy medium <span className="align-r font-8">18px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-20">
            Subheading <span className="align-r font-8">20px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-24">
            Title <span className="align-r font-8">24px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-32">
            Headline <span className="align-r font-8">32px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-36">
            Headline 2<span className="align-r font-8">36px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-48">
            Display-1 <span className="align-r font-8">48px</span>
          </div>
          <div className="span-2x1 grid-padding grid-border display-f content-sb font-60">
            Display-2 <span className="align-r font-8">60px</span>
          </div>
          <div className="span-2x1 spacing-xs font-bold grid-padding grid-border display-f reverse content-sb font-96">
            Display-3{" "}
            <span className="align-r spacing font-regular font-8">96px</span>
          </div>
        </div>
      </div>
      <div className="grid-3 span-12x1">
        <div className="grid-padding grid-border font-thin font-body">thin</div>
        <div className="grid-padding grid-border font-thin style-italic font-body">
          thin italic
        </div>
        <div className="grid-padding grid-border font-light font-body">
          light
        </div>
        <div className="grid-padding grid-border font-light style-italic font-body">
          light italic
        </div>
        <div className="grid-padding grid-border font-regular font-body">
          regular
        </div>
        <div className="grid-padding grid-border font-medium font-body">
          medium
        </div>
        <div className="grid-padding grid-border font-bold font-body">bold</div>
        <div className="grid-padding grid-border font-black font-body">
          black
        </div>
      </div>
      <div className="grid-3 span-12x1">
        <div className="grid-padding spacing-xs grid-border font-bold font-body">
          Extra small
        </div>
        <div className="grid-padding spacing-s grid-border font-bold font-body">
          Small
        </div>
        <div className="grid-padding spacing-default grid-border font-bold font-body">
          Default
        </div>
        <div className="grid-padding grid-border spacing-l font-bold font-body">
          Large
        </div>
      </div>
      <div className="grid-3 span-12x1">
        <div className="grid-padding opacity-10 grid-border font-bold font-body">
          Opacity10
        </div>
        <div className="grid-padding opacity-20 grid-border font-bold font-body">
          Opacity20
        </div>
        <div className="grid-padding opacity-30 grid-border font-bold font-body">
          Opacity30
        </div>
        <div className="grid-padding opacity-40 grid-border font-bold font-body">
          Opacity40
        </div>
        <div className="grid-padding opacity-50 grid-border font-bold font-body">
          Opacity50
        </div>
        <div className="grid-padding opacity-60 grid-border font-bold font-body">
          Opacity60
        </div>
        <div className="grid-padding opacity-70 grid-border font-bold font-body">
          Opacity70
        </div>
        <div className="grid-padding opacity-80 grid-border font-bold font-body">
          Opacity80
        </div>
        <div className="grid-padding opacity-90 grid-border font-bold font-body">
          Opacity90
        </div>
        <div className="grid-padding opacity-100 grid-border font-bold font-body">
          Opacity100 / default
        </div>
      </div>
    </div>
  );
}
