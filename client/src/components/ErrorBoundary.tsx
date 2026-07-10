import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('StudyQuest crashed', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-slate-950 px-4 text-white sm:px-6">
          <div className="max-w-md rounded-[28px] border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">System fault</p>
            <h1 className="mt-3 text-2xl font-semibold sm:text-3xl">The adventure map hit a corrupted rune.</h1>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Refresh the page. If the issue persists, the error boundary is doing its job and the
              rest of the app is isolated.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
