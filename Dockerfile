FROM python:3.11.3

WORKDIR /code

COPY ./backend/requirements.txt /code/requirements.txt

# RUN pip3 install --upgrade pip
RUN pip3 install torch torchvision --index-url https://download.pytorch.org/whl/cu117

RUN pip3 install --upgrade -r /code/requirements.txt --no-cache-dir 

COPY ./backend /code/backend


CMD ["uvicorn", "backend.app:app", "--reload"]
