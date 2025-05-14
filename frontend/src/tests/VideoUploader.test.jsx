import { render, screen } from '@testing-library/react'
import VideoUploader from '../components/VideoUploader'

test('renders upload button', () => {
  render(<VideoUploader />)
  expect(screen.getByLabelText(/upload/i)).toBeInTheDocument()
})
