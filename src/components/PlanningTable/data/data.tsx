import {
  SignalHigh,
  SignalMedium,
  SignalLow,
  FileType,
  Image,
  Camera,
  Video
} from '@ttab/elephant-ui/icons'

export const sectors = [
  {
    value: 'Utrikes',
    label: 'Utrikes'
  },
  {
    value: 'Inrikes',
    label: 'Inrikes'
  },
  {
    value: 'Sport',
    label: 'Sport'
  },
  {
    value: 'Kultur och nöje',
    label: 'Kultur & Nöje'
  },
  {
    value: 'Ekonomi',
    label: 'Ekonomi'
  }
]

export const priorities = [
  {
    label: 'High',
    value: '1',
    icon: SignalHigh
  },
  {
    label: 'Medium',
    value: '2',
    icon: SignalMedium
  },
  {
    label: 'Low',
    value: '3',
    icon: SignalLow
  }
]

export const assignmentTypes = [
  {
    label: 'Text',
    value: 'text',
    icon: FileType
  },
  {
    label: 'Graphic',
    value: 'graphic',
    icon: Image
  },
  {
    label: 'Picture',
    value: 'picture',
    icon: Camera
  },
  {
    label: 'Video',
    value: 'video',
    icon: Video
  }
]
