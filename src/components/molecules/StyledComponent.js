import styled from "vue-styled-components";

export const buttonPagination = styled.button`

@keyframes cdp-in {
  from {
    transform: scale(1.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.cdp {
  position: relative;
  text-align: center;
  padding: 20px 0;
  font-size: 0;
  z-index: 6;
  margin: 50px 0;
  
  animation: cdp-in 500ms ease both;
  animation-timeout: 200ms;

  &_i {
    font-size: 14px;
    text-decoration: none;
    
    transition: background 250ms;
    
    display: inline-block;
    text-transform: uppercase;
    margin: 0 3px 6px;
    height: 38px;
    min-width: 38px;
    border-radius: 38px;
    border: 2px solid #fff;
    line-height: 38px;
    padding: 0;
    color: #fff;
    font-weight: 700;
    letter-spacing: .03em;
    display: none;

    &:first-child,
    &:last-child {
      padding: 0 16px;
      margin: 0 12px 6px;
    }

    &:last-child,
    &:nth-child(2),
    &:nth-last-child(2) {
      display: inline-block;
    }
  }

  &_i:hover {
    background-color: #000;
    color: #fff;
  }

  &:not([actpage="1"]) &_i:nth-child(1) {
    display: inline-block;
  }
}
@for $i from 1 through 80 {
  .cdp[actpage="#{$i}"] {
    .cdp_i:nth-child(#{$i - 2}):not(:first-child):not(:nth-child(2)) {
      display: inline-block;
      pointer-events: none;
      color: transparent;
      border-color: transparent;
      width: 50px;
      &:after {
        content: '...';
        color: #fff;
        font-size: 32px;
        margin-left: -6px;
      }
    }
    .cdp_i:nth-child(#{$i - 1}):not(:first-child) {
      display: inline-block;
    }
    .cdp_i:nth-child(#{$i}):not(:first-child) {
      display: inline-block;
    }
    .cdp_i:nth-child(#{$i + 1}) {
      background-color: #000;
      color: #fff;
      display: inline-block;

      +.cdp_i:last-child {
        display: none !important;
      }
    }
    .cdp_i:nth-child(#{$i + 2}):not(:last-child) {
      display: inline-block;
    }
    .cdp_i:nth-child(#{$i + 3}):not(:last-child) {
      display: inline-block;
    }
    .cdp_i:nth-child(#{$i + 4}):not(:last-child):not(:nth-last-child(2)) {
      display: inline-block;
      pointer-events: none;
      color: transparent;
      border-color: transparent;
      width: 50px;
      &:after {
        content: '...';
        color: #fff;
        font-size: 32px;
        margin-left: -6px;
      }
    }
  }
}

`