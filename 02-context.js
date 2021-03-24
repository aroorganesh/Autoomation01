//Then in your next script you can get that id:
module.exports = async function(context, commands) {
  const idToUse = context.myId;
console.log("*** idToUse = " + idToUse);
}

//Run your script by passing it to sitespeed.io and adding the parameter --multi. If you have multiple scripts, you can just pass them in as well.

// ./node_modules/sitespeed.io/bin/sitespeed.js --multi "script/01-context.js" "script/02-context.js" -n 1

// n for iteration, default value is 3
