import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SoulOfErlang = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">The Soul of Erlang</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recursion in Erlang</CardTitle>
            <CardDescription>
              Erlang's elegant approach to recursion is a cornerstone of its functional programming paradigm.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="code" className="w-full">
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`
-module(factorial).
-export([fac/1]).

fac(0) -> 1;
fac(N) when N > 0 -> N * fac(N-1).
                  `}</code>
                </pre>
              </TabsContent>
              <TabsContent value="explanation">
                <p>
                  This example demonstrates a classic recursive function to calculate the factorial of a number.
                  The base case (fac(0)) returns 1, while the recursive case multiplies N with the factorial of N-1.
                  Erlang's pattern matching and guard clauses make the code concise and readable.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Message Passing in Erlang</CardTitle>
            <CardDescription>
              Erlang's concurrency model is built on the concept of lightweight processes and message passing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="code" className="w-full">
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`
-module(ping_pong).
-export([start/0, ping/2, pong/0]).

ping(0, Pong_PID) ->
    Pong_PID ! finished,
    io:format("ping finished~n", []);

ping(N, Pong_PID) ->
    Pong_PID ! {ping, self()},
    receive
        pong ->
            io:format("Ping received pong~n", [])
    end,
    ping(N - 1, Pong_PID).

pong() ->
    receive
        finished ->
            io:format("Pong finished~n", []);
        {ping, Ping_PID} ->
            io:format("Pong received ping~n", []),
            Ping_PID ! pong,
            pong()
    end.

start() ->
    Pong_PID = spawn(fun() -> pong() end),
    spawn(fun() -> ping(3, Pong_PID) end).
                  `}</code>
                </pre>
              </TabsContent>
              <TabsContent value="explanation">
                <p>
                  This example showcases Erlang's message passing mechanism with a simple ping-pong game.
                  Two processes are spawned: one for 'ping' and one for 'pong'. They communicate by sending
                  messages to each other. The ping process sends a specified number of pings, and the pong
                  process responds to each one until the game is finished.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoulOfErlang;