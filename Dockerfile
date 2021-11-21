FROM python:3.8

ARG REQUIREMENTS_FILE

WORKDIR /app
EXPOSE 80
ENV PYTHONUNBUFFERED 1

RUN set -x && \
	apt-get update && \
	apt -f install

CMD ["sh", "/entrypoint-web.sh"]
COPY ./docker/ /

COPY ./requirements/ ./requirements
RUN pip install --upgrade pip
RUN pip install -r ./requirements/${REQUIREMENTS_FILE}

COPY . ./
