import os from 'os'
import pify from 'pify'

export const fs = pify(require('fs'))

export const isMac = os.platform() === 'darwin'

export const ctrl = isMac ? 'Cmd' : 'Ctrl'
