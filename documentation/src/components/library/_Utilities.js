import React from "react";

function Utilities() {
  return (
    <div className="span-12x1">
      <h2 className="font-36 c-white bg-grey p-4">Utilities</h2>{" "}
      <div className="md-grid grid-2 gap-6 mt-12">
        <h5 className="text-grey">padding</h5>
        <p>p-(0 to 60)px</p>
        <h5 className="text-grey">margin</h5>
        <p>m-(0 to 60)px</p>
        <h5 className="text-grey">padding -left | -right | -bottom | -top</h5>
        <p>pl | pr | pb | pt-(0 to 60)px</p>
        <h5 className="text-grey"> margin -left | -right | -bottom | -top</h5>
        <p>ml | mr | mb | mt-(0 to 60)px</p>
        <h5 className="text-grey"> position</h5>
        <p>pos-(st:sticky | f:fixed | r:relative | a:absolute | st:static)</p>
        <h5 className="text-grey">color</h5>
        <p>
          c-(default | transparant: transparant | blue: #0077FF | red: #FF0000 |
          green: rgba(0,198,85) | grey: #B1B1B1 | black: rgb(20,20,20) |
          light-grey: #EBEBEB | white: white | purple: rgb(138, 34,138) | blur:
          rgba(255,255,255, 0.3))
        </p>
        <h5 className="text-grey"> border-radius</h5>
        <p>brr-(2 | 4 | 6 | 12 | 16 | 50:50%)</p>

        <h5 className="text-grey"> display</h5>
        <p>display-( block | flex | grid | inline | inline-block)</p>
        <h5 className="text-grey">overflow</h5>
        <p>ov-( visible | hidden | scroll | auto)</p>
        <h5 className="text-grey">text-align</h5>
        <p>align-(l:left | r:right | e:end | c:center | j:justify)</p>
        <h5 className="text-grey"> flex-direction</h5>
        <p>direction-(r:row | c:column | cr:column-reverse | rr:row-reverse)</p>
        <h5 className="text-grey"> justify-content</h5>
        <p>
          justify-c-(s: start | l:left | r:right | e:end | c:center |
          sb:space-between | se:space-evenly | sa:space-around | st:stretch)
        </p>
        <h5 className="text-grey"> justify-items</h5>
        <p>
          justify-i-(s: start | l:left | r:right | e:end | c:center |
          sb:space-between | se:space-evenly | sa:space-around | st:stretch)
        </p>
        <h5 className="text-grey"> align-items</h5>
        <p>
          align-i-(s: start | l:left | r:right | e:end | c:center | st:stretch |
          bs:baseline)
        </p>
        <h5 className="text-grey">align-self</h5>
        <p>
          align-s-(s: start | l:left | r:right | e:end | c:center | st:stretch |
          bs:baseline)
        </p>
        <h5 className="text-grey">font-size</h5>
        <p>
          font-(8:8px | 12:12px | 14:14px | 16:16px | 18:18px | 20:20px |
          24:24px | 32:32px | 36:36px | 48:48px | 60:60px | 96:96px)
        </p>
        <h5 className="text-grey"> font-weight</h5>
        <p>
          font-(thin:100 | light:300 | regular: 400 | medium:600 | bold:700 |
          black:900)
        </p>
        <h5 className="text-grey">letter-spacing</h5>
        <p>
          spacing-(--025:-0.25rem | --0125:0.125rem | default: rem |
          025:0.25rem)
        </p>
        <h5 className="text-grey"> font-style</h5>
        <p>style-(normal | italic | oblique)</p>
      </div>
    </div>
  );
}

export default Utilities;
