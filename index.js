var containerEl = document.querySelector(".container");
var currentDayEl = document.getElementById("currentDay");
var myText = document.querySelector("eventCol");
var saveEl = document.querySelector("saveBtn");

let date = new Date();
currentDayEl.innerHTML = moment(date).format("lll");

let time = moment(date).format('HH')


$(".saveCol12am").click(() => {
  let value = $(".eventCol .newEvent12am").val();
  localStorage.setItem("newEventEl12am", value);
});
if (localStorage.getItem("newEventEl12am") !== undefined) {
  $(".newEvent12am").val(localStorage.getItem("newEventEl12am"));
}
if (time == 00) {
    $(".newEvent12am").addClass("present")
}
if (time > 00) {
    $(".newEvent12am").addClass("past")
}
if (time < 00) {
    $(".newEvent12am").addClass("future")
}



$(".saveCol1am").click(() => {
  let value = $(".eventCol .newEvent1am").val();
  localStorage.setItem("newEventEl1am", value);
});
if (localStorage.getItem("newEventEl1am") !== undefined) {
  $(".newEvent1am").val(localStorage.getItem("newEventEl1am"));
}
if (time == 01) {
    $(".newEvent1am").addClass("present")
}
if (time > 01) {
    $(".newEvent1am").addClass("past")
}
if (time < 01) {
    $(".newEvent1am").addClass("future")
}

$(".saveCol2am").click(() => {
  let value = $(".eventCol .newEvent2am").val();
  localStorage.setItem("newEventEl2am", value);
});
if (localStorage.getItem("newEventEl2am") !== undefined) {
  $(".newEvent2am").val(localStorage.getItem("newEventEl2am"));
}
if (time == 02) {
    $(".newEvent2am").addClass("present")
}
if (time > 02) {
    $(".newEvent2am").addClass("past")
}
if (time < 02) {
    $(".newEvent2am").addClass("future")
}

$(".saveCol3am").click(() => {
  let value = $(".eventCol .newEvent3am").val();
  localStorage.setItem("newEventEl3am", value);
});
if (localStorage.getItem("newEventEl3am") !== undefined) {
  $(".newEvent3am").val(localStorage.getItem("newEventEl3am"));
}
if (time == 03) {
    $(".newEvent3am").addClass("present")
}
if (time > 03) {
    $(".newEvent3am").addClass("past")
}
if (time < 03) {
    $(".newEvent3am").addClass("future")
}

$(".saveCol4am").click(() => {
    let value = $(".eventCol .newEvent4am").val();
    localStorage.setItem("newEventEl4am", value);
  });
  if (localStorage.getItem("newEventEl4am") !== undefined) {
    $(".newEvent4am").val(localStorage.getItem("newEventEl4am"));
  }
  if (time == 04) {
    $(".newEvent4am").addClass("present")
}
if (time > 04) {
    $(".newEvent4am").addClass("past")
}
if (time < 04) {
    $(".newEvent4am").addClass("future")
}

  $(".saveCol5am").click(() => {
    let value = $(".eventCol .newEvent5am").val();
    localStorage.setItem("newEventEl5am", value);
  });
  if (localStorage.getItem("newEventEl5am") !== undefined) {
    $(".newEvent5am").val(localStorage.getItem("newEventEl5am"));
  }
  if (time == 05) {
    $(".newEvent5am").addClass("present")
}
if (time > 05) {
    $(".newEvent5am").addClass("past")
}
if (time < 05) {
    $(".newEvent5am").addClass("future")
}

  $(".saveCol6am").click(() => {
    let value = $(".eventCol .newEvent6am").val();
    localStorage.setItem("newEventEl6am", value);
  });
  if (localStorage.getItem("newEventEl6am") !== undefined) {
    $(".newEvent6am").val(localStorage.getItem("newEventEl6am"));
  }
  if (time == 06) {
    $(".newEvent6am").addClass("present")
}
if (time > 06) {
    $(".newEvent6am").addClass("past")
}
if (time < 06) {
    $(".newEvent6am").addClass("future")
}

  $(".saveCol7am").click(() => {
    let value = $(".eventCol .newEvent7am").val();
    localStorage.setItem("newEventEl7am", value);
  });
  if (localStorage.getItem("newEventEl7am") !== undefined) {
    $(".newEvent7am").val(localStorage.getItem("newEventEl7am"));
  }
  if (time == 07) {
    $(".newEvent7am").addClass("present")
}
if (time > 07) {
    $(".newEvent7am").addClass("past")
}
if (time < 07) {
    $(".newEvent7am").addClass("future")
}

  $(".saveCol8am").click(() => {
    let value = $(".eventCol .newEvent8am").val();
    localStorage.setItem("newEventEl8am", value);
  });
  if (localStorage.getItem("newEventEl8am") !== undefined) {
    $(".newEvent8am").val(localStorage.getItem("newEventEl8am"));
  }
  if (time == 08) {
    $(".newEvent8am").addClass("present")
}
if (time > 08) {
    $(".newEvent8am").addClass("past")
}
if (time < 08) {
    $(".newEvent8am").addClass("future")
}

  $(".saveCol9am").click(() => {
    let value = $(".eventCol .newEvent9am").val();
    localStorage.setItem("newEventEl9am", value);
  });
  if (localStorage.getItem("newEventEl9am") !== undefined) {
    $(".newEvent9am").val(localStorage.getItem("newEventEl9am"));
  }
  if (time == 09) {
    $(".newEvent9am").addClass("present")
}
if (time > 09) {
    $(".newEvent9am").addClass("past")
}
if (time < 09) {
    $(".newEvent9am").addClass("future")
}

  $(".saveCol10am").click(() => {
    let value = $(".eventCol .newEvent10am").val();
    localStorage.setItem("newEventEl10am", value);
  });
  if (localStorage.getItem("newEventEl10am") !== undefined) {
    $(".newEvent10am").val(localStorage.getItem("newEventEl10am"));
  }
  if (time == 10) {
    $(".newEvent10am").addClass("present")
}
if (time > 10) {
    $(".newEvent10am").addClass("past")
}
if (time < 10) {
    $(".newEvent10am").addClass("future")
}

  $(".saveCol11am").click(() => {
    let value = $(".eventCol .newEvent11am").val();
    localStorage.setItem("newEventEl11am", value);
  });
  if (localStorage.getItem("newEventEl11am") !== undefined) {
    $(".newEvent11am").val(localStorage.getItem("newEventEl11am"));
  }
  if (time == 11) {
    $(".newEvent11am").addClass("present")
}
if (time > 11) {
    $(".newEvent11am").addClass("past")
}
if (time < 11) {
    $(".newEvent11am").addClass("future")
}

  $(".saveCol12pm").click(() => {
    let value = $(".eventCol .newEvent12pm").val();
    localStorage.setItem("newEventEl12pm", value);
  });
  if (localStorage.getItem("newEventEl12pm") !== undefined) {
    $(".newEvent12pm").val(localStorage.getItem("newEventEl12pm"));
  }
  if (time == 12) {
    $(".newEvent12pm").addClass("present")
}
if (time > 12) {
    $(".newEvent12pm").addClass("past")
}
if (time < 12) {
    $(".newEvent12pm").addClass("future")
}

  $(".saveCol1pm").click(() => {
    let value = $(".eventCol .newEvent1pm").val();
    localStorage.setItem("newEventEl1pm", value);
  });
  if (localStorage.getItem("newEventEl1pm") !== undefined) {
    $(".newEvent1pm").val(localStorage.getItem("newEventEl1pm"));
  }
  if (time == 13) {
    $(".newEvent1pm").addClass("present")
}
if (time > 13) {
    $(".newEvent1pm").addClass("past")
}
if (time < 13) {
    $(".newEvent1pm").addClass("future")
}

  $(".saveCol2pm").click(() => {
    let value = $(".eventCol .newEvent2pm").val();
    localStorage.setItem("newEventEl2pm", value);
  });
  if (localStorage.getItem("newEventEl2pm") !== undefined) {
    $(".newEvent2pm").val(localStorage.getItem("newEventEl2pm"));
  }
  if (time == 14) {
    $(".newEvent2pm").addClass("present")
}
if (time > 14) {
    $(".newEvent2pm").addClass("past")
}
if (time < 14) {
    $(".newEvent2pm").addClass("future")
}

  $(".saveCol3pm").click(() => {
    let value = $(".eventCol .newEvent3pm").val();
    localStorage.setItem("newEventEl3pm", value);
  });
  if (localStorage.getItem("newEventEl3pm") !== undefined) {
    $(".newEvent3pm").val(localStorage.getItem("newEventEl3pm"));
  }
  if (time == 15) {
    $(".newEvent3pm").addClass("present")
}
if (time > 15) {
    $(".newEvent3pm").addClass("past")
}
if (time < 15) {
    $(".newEvent3pm").addClass("future")
}

  $(".saveCol4pm").click(() => {
    let value = $(".eventCol .newEvent4pm").val();
    localStorage.setItem("newEventEl4pm", value);
  });
  if (localStorage.getItem("newEventEl4pm") !== undefined) {
    $(".newEvent4pm").val(localStorage.getItem("newEventEl4pm"));
  }
  if (time == 16) {
    $(".newEvent4pm").addClass("present")
}
if (time > 16) {
    $(".newEvent4pm").addClass("past")
}
if (time < 16) {
    $(".newEvent4pm").addClass("future")
}

  $(".saveCol5pm").click(() => {
    let value = $(".eventCol .newEvent5pm").val();
    localStorage.setItem("newEventEl5pm", value);
  });
  if (localStorage.getItem("newEventEl5pm") !== undefined) {
    $(".newEvent5pm").val(localStorage.getItem("newEventEl5pm"));
  }
  if (time == 17) {
    $(".newEvent5pm").addClass("present")
}
if (time > 17) {
    $(".newEvent5pm").addClass("past")
}
if (time < 17) {
    $(".newEvent5pm").addClass("future")
}

  $(".saveCol6pm").click(() => {
    let value = $(".eventCol .newEvent6pm").val();
    localStorage.setItem("newEventEl6pm", value);
  });
  if (localStorage.getItem("newEventEl6pm") !== undefined) {
    $(".newEvent6pm").val(localStorage.getItem("newEventEl6pm"));
  }
  if (time == 18) {
    $(".newEvent6pm").addClass("present")
}
if (time > 18) {
    $(".newEvent6pm").addClass("past")
}
if (time < 18) {
    $(".newEvent6pm").addClass("future")
}

  $(".saveCol7pm").click(() => {
    let value = $(".eventCol .newEvent7pm").val();
    localStorage.setItem("newEventEl7pm", value);
  });
  if (localStorage.getItem("newEventEl7pm") !== undefined) {
    $(".newEvent7pm").val(localStorage.getItem("newEventEl7pm"));
  }
  if (time == 19) {
    $(".newEvent7pm").addClass("present")
}
if (time > 19) {
    $(".newEvent7pm").addClass("past")
}
if (time < 19) {
    $(".newEvent7pm").addClass("future")
}

  $(".saveCol8pm").click(() => {
    let value = $(".eventCol .newEvent8pm").val();
    localStorage.setItem("newEventEl8pm", value);
  });
  if (localStorage.getItem("newEventEl8pm") !== undefined) {
    $(".newEvent8pm").val(localStorage.getItem("newEventEl8pm"));
  }
  if (time == 20) {
    $(".newEvent8pm").addClass("present")
}
if (time > 20) {
    $(".newEvent8pm").addClass("past")
}
if (time < 20) {
    $(".newEvent8pm").addClass("future")
}

  $(".saveCol9pm").click(() => {
    let value = $(".eventCol .newEvent9pm").val();
    localStorage.setItem("newEventEl9pm", value);
  });
  if (localStorage.getItem("newEventEl9pm") !== undefined) {
    $(".newEvent9pm").val(localStorage.getItem("newEventEl9pm"));
  }
  if (time == 21) {
    $(".newEvent9pm").addClass("present")
}
if (time > 21) {
    $(".newEvent9pm").addClass("past")
}
if (time < 21) {
    $(".newEvent9pm").addClass("future")
}

  $(".saveCol10pm").click(() => {
    let value = $(".eventCol .newEvent10pm").val();
    localStorage.setItem("newEventEl10pm", value);
  });
  if (localStorage.getItem("newEventEl10pm") !== undefined) {
    $(".newEvent10pm").val(localStorage.getItem("newEventEl10pm"));
  }
  if (time == 22) {
    $(".newEvent10pm").addClass("present")
}
if (time > 22) {
    $(".newEvent10pm").addClass("past")
}
if (time < 22) {
    $(".newEvent10pm").addClass("future")
}

  $(".saveCol11pm").click(() => {
    let value = $(".eventCol .newEvent11pm").val();
    localStorage.setItem("newEventEl11pm", value);
  });
  if (localStorage.getItem("newEventEl11pm") !== undefined) {
    $(".newEvent11pm").val(localStorage.getItem("newEventEl11pm"));
  }
  if (time == 23) {
    $(".newEvent11pm").addClass("present")
}
if (time > 23) {
    $(".newEvent11pm").addClass("past")
}
if (time < 23) {
    $(".newEvent11pm").addClass("future")
}

// create if/else statment according to current time of day and time of the event
