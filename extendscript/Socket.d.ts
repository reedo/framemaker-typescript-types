// Type definitions for the Socket ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/**
 * The Socket object provides basic functionality to connect to a remote computer over a TCP/IP network or the Internet.
 *
 * It provides calls like `open()` and `close()` to establish or to terminate a connection, and `read()` or `write()` to transfer data.
 *
 * The `listen()` method establishes a simple Internet server; the server uses the method `poll()` to check for incoming connections.
 */
interface Socket extends ESObject {
	/**
	 * Terminates the open connection. Deleting the object also closes the connection, but not until JavaScript garbage-collects the object. The connection might stay open longer than you wish if you do not close it explicitly.
	 *
	 * @returns True if the connection was closed, false on I/O errors.
	 */
	close(): boolean;

	/** When true, the connection is active. */
	readonly connected: boolean;

	/** Sets or retrieves the name of the encoding used to transmit data. Typical values are "ASCII", "BINARY", or "UTF-8." */
	encoding: string;

	/** When true, the receive buffer is empty. */
	readonly eof: boolean;

	/** A message describing the most recent error. Setting this value clears any error message. */
	error: string;

	/**
	 * The name of the remote computer when a connection is established.
	 *
	 * If the connection is shut down or does not exist, the property contains the empty string.
	 */
	readonly host: string;

	/**
	 * Instructs the object to start listening for an incoming connection.
	 *
	 * The call to `open()` and the call to `listen()` are mutually exclusive. Call one function or the other, not both.
	 *
	 * @param port The TCP/IP port number to listen on. Valid port numbers are 1 to 65535. Typical values are 80 for a Web server, 23 for a Telnet server and so on.
	 * @param encoding The encoding to be used for the connection. Typical values are "ASCII", "binary", or "UTF-8". Default is "ASCII".
	 */
	listen(port: number, encoding?: string): boolean;

	/**
	 * Opens the connection for subsequent read/write operations.
	 *
	 * The call to `open()` and the call to `listen()` are mutually exclusive. Call one function or the other, not both.
	 *
	 * @param host The name or IP address of the remote computer, followed by a colon and the port number to connect to. The port number is required. Valid computer names are, for example, "www.adobe.com:80" or "192.150.14.12:80".
	 * @param encoding The encoding to be used for the connection. Typical values are "ASCII", "binary", or "UTF-8". Default is "ASCII".
	 */
	open(host: string, encoding?: string): boolean;

	/**
	 * Checks a listening object for a new incoming connection.
	 *
	 * If a connection request was detected, the method returns a new Socket object that wraps the new connection.
	 *
	 * Use this connection object to communicate with the remote computer.
	 *
	 * After use, close the connection and delete the javascript object.
	 *
	 * If no new connection request was detected, the method returns null.
	 */
	poll(): Socket | null;

	/**
	 * Reads up to the specified number of characters from the connection, waiting if necessary. Ignores CR characters unless encoding is set to BINARY.
	 *
	 * @param count The number of characters to read; default is 0. If negative, the call is equivalent to `readln()`.
	 *
	 * @returns A string that contains up to the number of characters that were supposed to be read, or the number of characters read before the connection closed or timed out.
	 */
	read(count?: number): string | number;

	/** Reads one line of text up to the next line feed. Line feeds are recognized as LF or CRLF pairs. CR characters are ignored. */
	readln(): string;

	/** The timeout in seconds to be applied to read or write operations. Default is 10. */
	timeout: number;

	/**
	 * Concatenates all arguments into a single string and writes that string to the connection.
	 *
	 * CRLF sequences are converted to LFs unless encoding is set to BINARY.
	 *
	 * @param text Any number of string values. All arguments are concatenated to form the string to be written.
	 */
	write(text: string, ...rest: string[]): boolean;

	/**
	 * Concatenates all arguments into a single string, appends a Line Feed character, and writes that string to the connection.
	 *
	 * @param text Any number of string values. All arguments are concatenated to form the string to be written.
	 */
	writeln(text: string, ...rest: string[]): boolean;
}

interface SocketConstructor extends ESObject {
	/** Creates and returns a new Socket object. */
	(): Socket;

	/** Creates and returns a new Socket object. */
	new (): Socket;

	readonly prototype: Socket;
}

declare const Socket: SocketConstructor;
