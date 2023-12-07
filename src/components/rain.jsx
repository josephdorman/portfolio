function Rain() {
  let increment = 0;
  let drops = '';
  let backDrops = '';

  while (increment < 95) {
    // couple random numbers to use for various randomizations
    // random number between 98 and 1
    let randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);

    // random number between 5 and 2
    let randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);

    // increment
    increment += randoFiver;
    
    // add in a new raindrop with various randomizations to certain CSS properties
    drops += `<div class="drop" style="left:${increment}%;bottom:${randoFiver + randoFiver - 1 + 85}%;animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;">
                <div class="stem" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
                <div class="splat" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
              </div>`;
    backDrops += `<div class="drop" style="right:${increment}%;bottom:${randoFiver + randoFiver - 1 + 85}%;animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;">
                    <div class="stem" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
                    <div class="splat" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
                  </div>`;
  }

  return (
    <>
      <div id="anim" className="back-row-toggle splat-toggle">
        <div className="rain front-row" dangerouslySetInnerHTML={{__html: drops }}></div>
        <div className="rain back-row" dangerouslySetInnerHTML={{__html: backDrops }}></div>
      </div>
    </>
  )

}

export default Rain