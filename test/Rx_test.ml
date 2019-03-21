open Jest

open Rx
open Operators

let oneObs = create (fun obs ->
  next obs 10;
  complete obs
)

let twoObs = create (fun obs ->
  next obs 100;
  next obs 200;
  complete obs
)

let _ = describe "Expect" begin fun () ->
  let open Expect in

  test "Sample test" (fun ()  -> expect (1 + 2) |> (toBe 3));

  testAsync "Rx.create - Create observable using static method" begin fun finish  ->
    let obs = create (fun obs ->
      next obs 20;
      complete obs
    ) in

    subscribe obs (fun value -> expect value |> toBe 20 |> finish) |> ignore
  end;
end

let _ = describe "combineLatest" begin fun () ->
  let open Expect in

  testAsync "combineLatest2" begin fun finish ->
    let testObs = combineLatest2 twoObs oneObs in

    subscribe testObs (fun value ->
      expect value |> toEqual (200, 10) |> finish) |> ignore
  end;

  testAsync "combineLatest6" begin fun finish ->
    let testObs = combineLatest6 oneObs oneObs oneObs oneObs oneObs oneObs in

    subscribe testObs (fun value ->
      expect value |> toEqual (10, 10, 10, 10, 10, 10) |> finish) |> ignore
  end;

end

let _ = describe "Static operators" begin fun () ->
  let open Expect in

  testAsync "concat" begin fun finish ->
    let testObs = concat [| oneObs; twoObs; oneObs |]
      |> reduce (fun acc n _i -> Array.append acc [| n |]) [||] in

    subscribe testObs (fun value ->
      expect value |> toEqual [| 10; 100; 200; 10 |] |> finish) |> ignore
  end;

  testAsync "defer" ~timeout:100 begin fun finish ->
    let testObs = defer (fun () -> oneObs) in

    subscribe testObs (fun value ->
      expect value |> toBe 10 |> finish) |> ignore
  end;

  testAsync "deferArray" ~timeout:100 begin fun finish ->
    let testObs = deferArray (fun () -> [| 20 |]) in

    subscribe testObs (fun value ->
      expect value |> toBe 20 |> finish) |> ignore
  end;

end
