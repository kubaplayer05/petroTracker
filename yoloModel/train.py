from ultralytics import YOLO

model = YOLO("./weights/yolov8n.pt")

results = model.train(data='./dataset/data.yaml', epochs=10, imgsz=640)

model.save("./weights/trained_model.pt")
