# arrivalBuffer Tuning

Default pad: 90 seconds.

Helper: `arrivalBuffer(etaSeconds, padSeconds = 90)`

Behavior:
- subtracts the pad from the current ETA
- returns 0 when the pad is larger than ETA
- clamps non-finite inputs to 0

Why:
- 90 seconds is a friendly "wrap up the call, save the doc, grab the bag" buffer
- smaller pads are good for short hops
- larger pads help in heavy traffic / walk-and-ride trips

Use `alertToneLabel` to escalate tone once arrivalBuffer goes below 60s.