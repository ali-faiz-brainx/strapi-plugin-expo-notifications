export function buildReceiversOptions(receivers) {
  let options = [];
  receivers.forEach((receiver) => {
    options.push({
      label: receiver.address,
      value: receiver.expoPushToken,
    });
  });
  return options;
}
