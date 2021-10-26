export const formatIncomingTasks = (appointments: any, missions: any) => {
  let final: any[] = [];
  if (appointments != null) {
    if (missions != null) {
      final = [...appointments, ...missions];
      final.sort(function (a: any, b: any) {
        let d1: any;
        let d2: any;
        if (a.__typename === 'Mission') {
          d1 = new Date(a.starts);
        } else {
          d1 = new Date(a.date);
        }
        if (b.__typename === 'Mission') {
          d2 = new Date(b.starts);
        } else {
          d2 = new Date(b.date);
        }
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return d1 - d2;
      });
    }
  }

  return final;
};

export const formatDate = (appointments: any, missions: any) => {
  let final: any[] = [];
  appointments.map((app: any) => {
    const data = {
      title: app.title,
      date: app.date,
    };
    return final.push(data);
  });
  missions.map((miss: any) => {
    const data = {
      title: miss.title,
      date: miss.starts,
    };
    return final.push(data);
  });
  return final;
};

export function minTwoDigits(n: any) {
  return (n < 10 ? '0' : '') + n;
}
