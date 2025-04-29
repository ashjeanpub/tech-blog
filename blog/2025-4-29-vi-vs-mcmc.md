---
slug: vi-vs-mcmc
title: Variational Inference vs MCMC
authors: Allonsi
tags: [stat, bayes]

---

# Variational Inference vs MCMC 

모수(parameter)들의 사후분포(posterior distribution)를 우리가 아는 분포로 나타낼 수 없는 경우, 기본적으로 MCMC가 쓰인다. 하지만 MCMC는 Sampling에 기반한 방법이기에 종종 천문학적인 계산 시간이 필요한 경우가 많다. 이와 같은 경우, Variational Inference가 MCMC의 대안으로 쓰인다. Sampling을 이용하는 대신, 사후분포 추정을 Loss function optimization 문제로 풀어내는 것이 Variational Inference의 주된 아이디어이다. Optimization은 Sampling에 비해 계산 시간이 굉장히 짧다는 장점이 있다. 하지만 MCMC에 비해서 사후분포 추정 정확도는 상대적으로 떨어진다는 단점이 있다.


## Reference
- https://arxiv.org/pdf/1601.00670