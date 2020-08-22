function init() {
  const jProgressText = $(".j-progress-text");
  const jProgress1 = $(".j-progress-1");

  const jBtn1 = $(".j-btn-1");
  const jBtn2 = $(".j-btn-2");
  const jBtn3 = $(".j-btn-3");

  let jProgressTextNew = 0;

  jBtn1.click(function () {
    jProgressTextNew = jProgressTextNew + 1;

    if (jProgressTextNew < 100) {
      jProgressText.html(jProgressTextNew + " %");
      jProgress1.width(jProgressTextNew + "%");
      return;
    } else {
      jProgressTextNew = 100;
      jProgressText.html(jProgressTextNew + " %");
      jProgress1.width(jProgressTextNew + "%");
      return;
    }
  });
  jBtn2.click(function () {
    jProgressTextNew = jProgressTextNew + 3;
    if (jProgressTextNew < 100) {
      jProgressText.html(jProgressTextNew + " %");
      jProgress1.width(jProgressTextNew + "%");
      return;
    } else {
      jProgressTextNew = 100;
      jProgressText.html(jProgressTextNew + " %");
      jProgress1.width(jProgressTextNew + "%");
      return;
    }
  });
  jBtn3.click(function () {
    jProgressTextNew = jProgressTextNew + 7;
    if (jProgressTextNew < 100) {
      jProgressText.html(jProgressTextNew + " %");
      jProgress1.width(jProgressTextNew + "%");
      return;
    } else {
      jProgressTextNew = 100;
      jProgressText.html(jProgressTextNew + " %");
      jProgress1.width(jProgressTextNew + "%");
      return;
    }
  });
}

$(document).ready(init);
