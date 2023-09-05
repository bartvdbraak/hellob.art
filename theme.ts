import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
	name: 'theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '6px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #4F46E5
		'--color-primary-50': '229 227 251', // #e5e3fb
		'--color-primary-100': '220 218 250', // #dcdafa
		'--color-primary-200': '211 209 249', // #d3d1f9
		'--color-primary-300': '185 181 245', // #b9b5f5
		'--color-primary-400': '132 126 237', // #847eed
		'--color-primary-500': '79 70 229', // #4F46E5
		'--color-primary-600': '71 63 206', // #473fce
		'--color-primary-700': '59 53 172', // #3b35ac
		'--color-primary-800': '47 42 137', // #2f2a89
		'--color-primary-900': '39 34 112', // #272270
		// secondary | #0cb79e
		'--color-secondary-50': '219 244 240', // #dbf4f0
		'--color-secondary-100': '206 241 236', // #cef1ec
		'--color-secondary-200': '194 237 231', // #c2ede7
		'--color-secondary-300': '158 226 216', // #9ee2d8
		'--color-secondary-400': '85 205 187', // #55cdbb
		'--color-secondary-500': '12 183 158', // #0cb79e
		'--color-secondary-600': '11 165 142', // #0ba58e
		'--color-secondary-700': '9 137 119', // #098977
		'--color-secondary-800': '7 110 95', // #076e5f
		'--color-secondary-900': '6 90 77', // #065a4d
		// tertiary | #0ea5e9
		'--color-tertiary-50': '219 242 252', // #dbf2fc
		'--color-tertiary-100': '207 237 251', // #cfedfb
		'--color-tertiary-200': '195 233 250', // #c3e9fa
		'--color-tertiary-300': '159 219 246', // #9fdbf6
		'--color-tertiary-400': '86 192 240', // #56c0f0
		'--color-tertiary-500': '14 165 233', // #0ea5e9
		'--color-tertiary-600': '13 149 210', // #0d95d2
		'--color-tertiary-700': '11 124 175', // #0b7caf
		'--color-tertiary-800': '8 99 140', // #08638c
		'--color-tertiary-900': '7 81 114', // #075172
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #050609
		'--color-surface-50': '218 218 218', // #dadada
		'--color-surface-100': '205 205 206', // #cdcdce
		'--color-surface-200': '193 193 194', // #c1c1c2
		'--color-surface-300': '155 155 157', // #9b9b9d
		'--color-surface-400': '80 81 83', // #505153
		'--color-surface-500': '5 6 9', // #050609
		'--color-surface-600': '5 5 8', // #050508
		'--color-surface-700': '4 5 7', // #040507
		'--color-surface-800': '3 4 5', // #030405
		'--color-surface-900': '2 3 4' // #020304
	}
};
