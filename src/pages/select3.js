import React, { useEffect, useRef } from "react";

function Select3() {

  // const pathRef = useRef(null);

  useEffect(() => {
    // const box = document.getElementById("path20").getBBox();
    // console.log(box)
    // console.log(pathRef)
  }, [])

  return (
    <div className="select3">
      <h1>888888888</h1>
      <div className="list">
        <div className="item">
          <span>Country: Country Name</span>
          {/* <span>flag: Icon</span> */}
          <i className="fa fa-spinner"></i>
          <i className="fab fa-apple"></i>
          <i className="fab fa-adn"></i>
          {/* <span>%</span> */}
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <i className="fas fa-camera fa-2x"></i>
        </div>

        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          {/* <svg className="svg333">
            <path ref={pathRef} d="M184.049 46.546 184.219 47.082 184.248 47.583 183.482 48.05 182.978 48.32 182.373 49.608 181.253 50.48 181.065 50.745 181.074 50.984 181.834 51.379 182.088 51.753 182.206 52.255 181.866 54.046 181.653 55.417 181.374 57.211 181.385 57.894 181.673 58.712 181.958 59.348 182.048 60.068 181.947 61.839 182.295 62.862 182.575 63.803 181.909 64.976 181.624 66.009 181.446 67.487 181.374 68.417 180.944 69.275 180.386 70.079 179.755 70.58 178.977 71.012 178.082 71.579 177.356 73.097 175.786 74.359 175.458 74.791 175.311 75.799 175.349 77.195 175.625 78.304 176.377 79.94 177.036 81.737 177.215 82.639 177.468 82.981 178.396 83.569 180 84.364 180.296 84.689 181.091 85.922 181.846 88.128 182.082 89.585 183.551 90.743 184.907 91.808 186.209 92.744 187.623 93.758 187.828 94.069 188.297 96.215 188.767 98.34 189.279 100.676 189.798 103.015 190.408 105.759 190.754 107.312 191.171 109.192 191.664 111.392 190.872 111.859 189.979 112.455 190.63 113.584 191.886 115.419 192.643 116.896 192.908 117.538 193.498 119.367 193.979 121.136 194.103 121.709 194.279 123.068 194.063 126.8 194.408 131.521 194.875 133.865 194.141 135.976 193.513 137.989 193.553 139 193.899 140.576 194.239 141.739 194.699 142.35 194.61 144.305 194.417 145.014 193.006 146.036 191.442 146.972 191.01 147.764 190.886 148.645 191.094 149.362 192.168 150.946 193.784 153.317 195.56 155.92 195.707 156.574 195.779 158.417 196.52 160.73 197.32 161.738 197.62 162.489 198.187 163.028 198.752 163.423 199.103 163.469 201.099 162.841 204.512 163.878 207.74 164.932 207.976 165.139 208.682 166.472 209.837 168.647 210.692 170.384 211.458 171.936 207.273 174.608 203.086 177.275 198.901 179.936 194.717 182.589 190.532 185.239 186.344 187.882 182.16 190.52 177.975 193.15 175.199 194.892 173.433 196.43 171.219 198.351 169.128 200.258 167.483 201.758 165.352 203.694 164.278 204.67 161.902 206.827 161.188 207.21 158.04 207.847 155.151 208.428 152.484 208.967 150.661 209.336 148.896 209.69 146.33 210.191 144.498 210.551 142.522 210.937 142.214 211.003 141.857 211.017 141.589 211.003 141.042 210.79 140.383 210.286 139.942 210.027 139.832 209.629 140.089 209.099 140.408 208.624 140.529 208.25 140.748 207.965 141.031 207.734 141.042 207.409 140.809 206.873 140.604 206.133 140.613 204.788 140.619 204.339 140.619 204.177 140.028 203.662 138.914 203.092 137.888 202.758 137.422 202.642 136.29 202.441 134.726 202.081 134.176 201.833 133.162 200.58 132.664 200.261 130.317 200.048 129.536 199.84 128.897 199.544 128.35 199.14 128.042 198.452 127.95 197.89 127.745 197.623 125.156 196.263 124.496 195.802 124.148 195.373 124.136 194.737 124.206 193.956 124.096 193.262 123.987 192.922 122.803 192.099 120.156 190.25 117.51 188.401 114.863 186.549 112.216 184.694 109.569 182.837 106.923 180.976 104.276 179.113 101.629 177.247 98.983 175.375 96.333 173.505 93.689 171.628 91.042 169.75 88.396 167.869 85.746 165.983 83.099 164.094 80.453 162.201 78.215 160.603 75.747 158.91 73.912 157.668 72.092 156.43 70.134 155.102 68.861 154.279 67.343 153.294 65.822 152.306 64.302 151.318 62.781 150.33 61.26 149.342 59.74 148.352 58.222 147.361 56.701 146.367 55.181 145.374 53.663 144.38 52.142 143.386 50.622 142.39 49.101 141.393 47.58 140.394 46.06 139.395 44.542 138.395 44.542 136.546 44.542 135.04 44.542 132.823 44.542 130.893 44.542 128.963 44.542 127.633 44.542 126.245 44.582 125.617 44.732 125.349 45.553 124.897 46.837 123.866 47.312 123.408 47.92 122.944 50.072 121.547 50.518 121.156 52.609 119.546 53.098 119.31 54.222 119.151 54.691 118.849 55.322 118.204 56.249 117.466 56.851 117.115 56.995 117.052 57.381 117 59.313 117.219 60.126 117.383 61.096 117.521 61.399 117.426 61.658 117.196 62.024 116.68 62.101 116.067 62.124 115.531 62.182 115.298 62.352 115.191 62.775 115.232 63.34 115.304 64.495 115.28 64.886 115.206 66.197 115.09 68.048 114.742 69.517 114.287 70.687 113.927 71.939 112.979 72.858 111.98 73.811 110.488 74.569 109.192 76.104 108.383 77.385 107.89 78.12 107.697 79.784 107.012 81.193 105.975 82.515 105.002 83.526 104.872 84.804 104.711 85.089 104.529 85.412 104.184 85.429 103.573 85.043 103.144 84.577 102.92 84.246 102.672 83.917 102.626 83.742 102.332 83.84 101.791 83.888 101.289 84.099 100.788 84.041 100.08 83.713 99.371 83.612 98.862 83.635 98.355 83.796 97.96 84.269 97.698 84.819 97.597 85.591 97.724 86.924 97.554 90.337 96.327 90.573 95.95 90.792 95.1 91.037 94.354 91.391 94.104 91.584 94.049 92.721 93.848 94.331 93.565 94.936 93.525 96.693 93.606 97.972 93.666 100.04 93.764 101.508 93.813 102.787 93.856 104.417 93.914 104.817 93.741 104.817 93.197 104.524 92.183 104.702 91.549 105.33 90.962 106.113 90.305 105.748 89.504 105.123 88.969 104.25 88.324 103.798 88.062 103.006 87.281 102.522 86.391 102.194 84.513 101.592 83.459 101.154 82.158 101.543 79.764 100.961 78.316 100.872 77.688 100.866 76.948 101.045 75.666 100.929 73.86 100.244 71.994 100.567 71.358 100.716 71.026 100.667 70.741 100.042 70.148 99.777 69.656 99.916 69.195 100.241 68.524 100.212 68.241 99.201 67.424 97.496 66.096 97.018 65.514 96.785 64.785 98.418 64.973 99.262 64.883 101.197 64.008 102.735 62.824 103.93 62.222 104.982 60.923 105.935 60.103 107.312 59.216 111.283 57.3 111.891 57.286 113.198 57.721 114.336 57.585 115.113 56.914 115.952 55.296 117.25 54.308 118.889 53.317 121.118 52.37 122.578 51.497 124.888 50.74 130.686 50.259 133.664 49.83 135.688 49.928 137.733 48.539 138.755 48.081 143.182 47.975 145.27 46.958 153.184 46.958 154.152 47.298 155.102 47.845 156.721 49.161 157.527 49.449 158.573 49.176 161.003 47.929 163.745 47.278 165.237 46.535 165.871 45.449 167.155 45.049 167.878 45.884 170.72 46.725 172.466 46.483 173.232 46.23 172.955 44.983 174.801 45.314 176.218 45.916 177.702 47.12 178.664 47.359 180.415 46.817z" />
          </svg> */}
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          {/* <svg className="svg222">
            <path ref={pathRef} id="path20" d="M232.136 64.224l2.944 4.016.416 27.216.672 1.936-1.568.288-1.76 2.064-2.064 3.184-2.832 1.648-2.272 1.856-2.144 2.304-1.92.496-2.48-2.928-1.712-2.992.416-.656 1.2-.208.448-1.552-.72-2.24-1.68-.848-2.112-.064-2.032 1.008-2.16 1.984-1.216 2.128-.176 4.272.56 4.8-.016 2.336-1.184 2.896-.416 4.256.848 3.296.768 1.968.08 1.664-2.016 5.248 1.744.992 5.776.368 1.696 3.552 1.152 2.432-.32 1.44-4.096 1.072-5.152 1.184-3.696-.336-6.688 1.6-3.568 2.464 1.04 1.536 1.232 1.184.56 3.248-1.04 4.608-1.888 4.464-2.352 5.568-2.72 6.384-3.728 9.6-3.152 7.536-.336 5.424.08 3.536-.352 7.056-2.992 3.888-.672.112-3.568-.464-1.2-.16-3.408-.448-5.28-.688-6.864-.912-8.112-1.056-9.04-1.2-9.664-1.28-10-1.312-9.984-1.312-9.68-1.28-9.04-1.184-8.112-1.072-6.848-.912-5.28-.688-3.408-.448-1.2-.16-3.776-.496-2.032-2.624-2.464-3.168-2.48-3.184-2.464-3.184-2.464-3.184-2.464-3.184-2.464-3.184-2.464-3.184-2.464-3.184-2.464-3.2-2.464-3.184-2.48-3.2-2.464-3.2-2.464-3.2-2.464-3.2-2.464-3.2-2.464-3.2-1.664-2.144-.912-2.416-.176-6.336v-1.392l1.664-2.56.8 1.824 1.856 2.48 3.152-.608 1.472.416 1.088 8.784 2.32 3.12 2.816 1.248 9.552.688 5.936-1.184 11.696-5.728 6.144-2.064 16.992.352 13.616 2.384 21.2 1.408 4.112-.368 11.44-4.608 7.008-4.064 4.176-1.168 2.752-3.936 1.808-5.12 1.616-3.344 2.064-1.6 1.952-2.848 1.584-4.624 3.936-4.672 15.776-11.376 9.216-9.632.816-3.12 5.008-4.672 4.016-5.12 18.8-14.656 3.76-6.064 2.224-6.8.272-.48 1.616-.288 2.304 1.024.24 5.088-.848 4.8-.096 5.088-.336 2.752 1.744 2.256 2.976.976 1.296-.112L232.136 64.224zM231.4 84.752l.272-2.128-.464-1.104-1.92-.144-.8 1.84-.272 2.64 1.328.224L231.4 84.752zM149.864 123.76l-.4.96-1.264-.08-3.168-.864-1.024-1.376 1.984-1.648.88-.08 1.264 1.728L149.864 123.76zM98.968 132.784l-3.328.272-3.008-1.856 6.352-2.48 1.712-1.12 1.856-2.288 1.488 1.968-1.648 3.088-1.168 1.328L98.968 132.784zM66.84 131.328l-.752.352-.8-2.64.048-.832 2.064-1.2 1.264 2.16L66.84 131.328zM125.704 136.768l.016 1.664-4.56-.48-1.216.864-3.744-.48-3.664-1.2 2.48-2 6.464-2.352 2.688 2.144L125.704 136.768z" />
          </svg> */}
          {/* <svg viewBox="0 0 512 512">
            <path d="M464.272 128.448l5.888 8.032.832 54.432 1.344 3.872-3.136.576-3.52 4.128-4.128 6.368-5.664 3.296-4.544 3.712-4.288 4.608-3.84.992-4.96-5.856-3.424-5.984.832-1.312 2.4-.416.896-3.104-1.44-4.48-3.36-1.696-4.224-.128-4.064 2.016-4.32 3.968-2.432 4.256-.352 8.544 1.12 9.6-.032 4.672-2.368 5.792-.832 8.512 1.696 6.592 1.536 3.936.16 3.328-4.032 10.496 3.488 1.984 11.552.736 3.392 7.104 2.304 4.864-.64 2.88-8.192 2.144-10.304 2.368-7.392-.672-13.376 3.2-7.136 4.928 2.08 3.072 2.464 2.368 1.12 6.496-2.08 9.216-3.776 8.928-4.704 11.136-5.44 12.768-7.456 19.2-6.304 15.072-.672 10.848.16 7.072-.704 14.112-5.984 7.776-1.344.224-7.136-.928-2.4-.32-6.816-.896-10.56-1.376-13.728-1.824-16.224-2.112-18.08-2.4-19.328-2.56-20-2.624-19.968-2.624-19.36-2.56-18.08-2.368-16.224-2.144-13.696-1.824-10.56-1.376-6.816-.896-2.4-.32-7.552-.992-4.064-5.248-4.928-6.336-4.96-6.368-4.928-6.368-4.928-6.368-4.928-6.368-4.928-6.368-4.928-6.368-4.928-6.368-4.928-6.4-4.928-6.368-4.96-6.4-4.928-6.4-4.928-6.4-4.928-6.4-4.928-6.4-4.928-6.4-3.328-4.288-1.824-4.832-.352-12.672v-2.784l3.328-5.12 1.6 3.648 3.712 4.96 6.304-1.216 2.944.832 2.176 17.568 4.64 6.24 5.632 2.496 19.104 1.376 11.872-2.368 23.392-11.456 12.288-4.128 33.984.704 27.232 4.768 42.4 2.816 8.224-.736 22.88-9.216 14.016-8.128 8.352-2.336 5.504-7.872 3.616-10.24 3.232-6.688 4.128-3.2 3.904-5.696 3.168-9.248 7.872-9.344 31.552-22.752 18.432-19.264 1.632-6.24 10.016-9.344 8.032-10.24 37.6-29.312 7.52-12.128 4.448-13.6.544-.96 3.232-.576 4.608 2.048.48 10.176-1.696 9.6-.192 10.176-.672 5.504 3.488 4.512 5.952 1.952 2.592-.224L464.272 128.448zM462.8 169.504l.544-4.256-.928-2.208-3.84-.288-1.6 3.68-.544 5.28 2.656.448L462.8 169.504zM299.728 247.52l-.8 1.92-2.528-.16-6.336-1.728-2.048-2.752 3.968-3.296 1.76-.16 2.528 3.456L299.728 247.52zM197.936 265.568l-6.656.544-6.016-3.712 12.704-4.96 3.424-2.24 3.712-4.576 2.976 3.936-3.296 6.176-2.336 2.656L197.936 265.568zM133.68 262.656l-1.504.704-1.6-5.28.096-1.664 4.128-2.4 2.528 4.32L133.68 262.656zM251.408 273.536l.032 3.328-9.12-.96-2.432 1.728-7.488-.96-7.328-2.4 4.96-4 12.928-4.704 5.376 4.288L251.408 273.536z" />
          </svg> */}
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
        <div className="item">
          <span>Country: Country Name</span>
          <span>flag: Icon</span>
          <span>%</span>
        </div>
      </div>
    </div >

  );
}

export default React.memo(Select3);