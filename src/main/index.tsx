import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Home } from '../page/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<Header />
				<Home />
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>,
)
