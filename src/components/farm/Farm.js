import React from "react";
import '../farm/farm.css'

export default function Farm() {
  return (
    <div className="farm">
      <div class="farm_image">
        {/* <iframe
          class="elementor-background-video-embed"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="footage sayuran hidroponik free bebas copyright bebas hak cipta"
          src="https://www.youtube.com/embed/WThJciyM6tk?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fkitnew.moxcreative.com&amp;widgetid=1"
          id="widget2"
          style={{width: "1292px", height: "726.75px"}}
          width="640"
          height="360"
          frameborder="0"
        ></iframe> */}
        <img style={{width: "100%", height: "530px"}} src="https://images.unsplash.com/photo-1601113430990-b1859844b139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3MDA1NDZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="farm"/>
      </div>
      <div class="elementor-background-overlay"></div>
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ffb39c6 animated fadeInUp"
          data-id="ffb39c6"
          data-element_type="column"
          data-settings='{"animation":"fadeInUp"}'
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-de7a431 elementor-widget elementor-widget-heading"
              data-id="de7a431"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div class="title">
                <h2 class="farm_title">
                  Feeding the globe and looking after the environment.
                </h2>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-5751fce elementor-widget elementor-widget-text-editor"
              data-id="5751fce"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div class="elementor-widget-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>{" "}
              </div>
            </div>
            <div
              class="elementor-element elementor-element-ad724c4 elementor-align-center elementor-widget elementor-widget-button"
              data-id="ad724c4"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-button-wrapper">
                  <a
                    href="#"
                    class="elementor-button-link elementor-button elementor-size-md"
                    role="button"
                  >
                    <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-text">Discover more</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
