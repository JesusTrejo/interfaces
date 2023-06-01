import { multiply } from 'mathjs'

export default function conv(x, h) {
  const M = x.length
  const N = h.length

  const y_length = M + N - 1
  let h_inv = Array(y_length).fill(0)
  h_inv = [...h_inv, ...[...h].reverse()]

  let y = []
  for (let n = 0; n < y_length; n++) {
    h_inv.unshift(h_inv.pop())
    let h_frame = h_inv.slice(0, M)
    const conv_n = multiply(x, h_frame);
    y[n] = conv_n;
  }

  console.log(y)
  return y;
}
