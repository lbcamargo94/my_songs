import React from "react";

export default function Footer() {
  return (
    <section>
      <div>
        {/* link deezer app on App Store */}
        <a href="" target="_blank">
          <img
            src="https://assets.deezer.com/common/images/apple-store-badge/pt-br.svg"
            alt="Download on the App Store"
          />
        </a>
        {/* link deezer app on Google Play */}
        <a href="" target="_blank">
          <img
            src="https://assets.deezer.com/common/images/play-store-badge/pt-br.svg"
            alt="Get it on Google Play"
          />
        </a>
      </div>
      <div>
        <ul>
          {/* link to linkedin */}
          <li>
            <a
              href="https://www.linkedin.com/in/lucas-b-camargo/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="" alt="" />
            </a>
          </li>
          {/* link to github */}
          <li>
            <a
              href="https://github.com/lbcamargo94"
              target="_blank"
              rel="noreferrer"
            >
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1>
          © 2022 lbcamargo,{" "}
          <a src>developed with API - Deezer for developers</a>
        </h1>
      </div>
    </section>
  );
}
